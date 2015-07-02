var doresh = new (function(){
    var self = this;
    this.executionDrishot = {};

    function printExecutionDrishot(){
        var result = '';
        for(var v in self.executionDrishot){
            result+= self.executionDrishot[v].toString()+'\n';
        }
        return result;
    }

    var utils =(function(){
        function stringEndsWith(str, suffix){
            var strLen = str.length;
            var suffixLen = suffix.length;
            return strLen >= suffixLen && str.lastIndexOf(suffix) == strLen-suffixLen;
        }

        return {
            stringEndsWith:stringEndsWith
        }
    })();

    function normalizeFileName(fileName){
        if(!utils.stringEndsWith(fileName, '.js')){
            return fileName+='.js';
        }
        return fileName;
    }

    function DrishObj(dependencies, callback, filePath){
        this.initialized = false;
        this.dependencies = dependencies;
        this.execute = callback;
        this.returnedValue = undefined;
        this.filePath = filePath;
        this.toString = function(){
            return filePath + " initialized: " + this.initialized;
        }.bind(this);
    }

    function tryToMakeProgress(codeFile){
        var madeProgress = false;
        var depsAreInitialized = true;

        codeFile.dependencies.forEach(function(key){
            if(!self.executionDrishot[key]){
                loadCodeFile(key);
                madeProgress = true;
            }
            if(!self.executionDrishot[key] || !self.executionDrishot[key].initialized){
                depsAreInitialized = false;
            }
        });

        if(depsAreInitialized){
            var parameters = codeFile.dependencies.map(function(key){
                return self.executionDrishot[key].returnedValue;
            });
            codeFile.initialized = true;
            codeFile.returnedValue = codeFile.execute.apply(null, parameters);
            madeProgress = true;
        }


        return madeProgress;
    }

    function loadCodeFile(filePath){
        var script = document.createElement('script');
        script.src = filePath;
        document.head.appendChild(script);
    }

    function resolve(){
        var didAtLeastOneStep = false,
            codeFile;
        for(var codeFileKey in self.executionDrishot){
            codeFile = self.executionDrishot[codeFileKey];
            if(!codeFile.initialized && tryToMakeProgress(codeFile)){
                didAtLeastOneStep = true;
            }
        }
        return didAtLeastOneStep;
    }
    resolve.bind(this);

    function isFullyResolved(){
        if(!self.executionDrishot['app.js']){
            return false;
        }
        for(var key in self.executionDrishot){
            if(!self.executionDrishot[key].initialized){
                return false;
            }
        }
        return true;
    }

    function resolveAsync(sleepTime, noProgressCount, count){
       // console.log(count++);

        setTimeout(function verifyResolves() {
            if(resolve()){
                resolveAsync(0, noProgressCount, count);
            }else if(!isFullyResolved()){
                if(noProgressCount>20){
                    throw 'doresh failed';
                }
                noProgressCount++;
                console.log(noProgressCount);
                console.log(printExecutionDrishot());
                resolveAsync(10, noProgressCount, count);
            }
        }, sleepTime);
    }

    function doresh(filePath, drishot, callback){
        filePath = normalizeFileName(filePath);
        drishot = drishot.map(function(item){
            return normalizeFileName(item);
        });
        if(self.executionDrishot[filePath]){
            return;
        }
        self.executionDrishot[filePath] = new DrishObj(drishot, callback, filePath);
    }
    doresh.bind(this);

    document.addEventListener("DOMContentLoaded", function() {
        loadCodeFile('app.js');
        resolveAsync(20, 0, 0);
    });
    return doresh;
})();