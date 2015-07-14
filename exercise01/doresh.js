var doresh = (function(){
    var executionDrishot = {};
    var isCodeFileLoaded = {};
    var EMPTY_STRING = '                                  ';
    var MAX_FAILS_MAKING_PROGRESS = 20;

    function UnableToResolveDependeciesError(message){
        this.name = "UnableToResolveDependeciesError";
        this.message = (message || "");
    }

    UnableToResolveDependeciesError.prototype = Error.prototype;

    function printExecutionDrishot(){
        var result = '';
        for(var v in executionDrishot){
            result+= executionDrishot[v].toString()+'\n';
        }
        return result;
    }

    function printUnresolvedDrishot(){
        var result = '';
        for(var v in executionDrishot){
            if(!executionDrishot[v].initialized) {
                result += executionDrishot[v].toString() + '\n';
            }
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
            var filePathLen30 = (filePath  + EMPTY_STRING).substring(0, 30);
            return filePathLen30 + " initialized: " + this.initialized;
        }.bind(this);
    }

    function tryToMakeProgress(drishObj){
        var madeProgress = false;
        var depsAreInitialized = true;

        drishObj.dependencies.forEach(function(key){
            if(!executionDrishot[key] && !isCodeFileLoaded[key]){
                loadCodeFile(key);
                madeProgress = true;
            }
            if(!executionDrishot[key] || !executionDrishot[key].initialized){
                depsAreInitialized = false;
            }
        });

        if(depsAreInitialized){
            var parameters = drishObj.dependencies.map(function(key){
                return executionDrishot[key].returnedValue;
            });
            drishObj.initialized = true;
            drishObj.returnedValue = drishObj.execute.apply(null, parameters);
            madeProgress = true;
        }


        return madeProgress;
    }

    function loadCodeFile(filePath){
        isCodeFileLoaded[filePath] = true;
        var script = document.createElement('script');
        script.src = filePath;
        document.head.appendChild(script);
    }

    function resolve(){
        var didAtLeastOneStep = false,
            codeFile;
        for(var codeFileKey in executionDrishot){
            codeFile = executionDrishot[codeFileKey];
            if(!codeFile.initialized && tryToMakeProgress(codeFile)){
                didAtLeastOneStep = true;
            }
        }
        return didAtLeastOneStep;
    }

    function isFullyResolved(){
        if(!executionDrishot['app.js']){
            return false;
        }
        for(var key in executionDrishot){
            if(!executionDrishot[key].initialized){
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
                if(noProgressCount>MAX_FAILS_MAKING_PROGRESS){
                    throw new UnableToResolveDependeciesError('unresolved files:\n' + printUnresolvedDrishot());
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
        if(executionDrishot[filePath]){
            return;
        }
        executionDrishot[filePath] = new DrishObj(drishot, callback, filePath);
    }

    function getAppScriptPath(){
        var scripts = document.querySelectorAll('script'),
            doreshScriptElement, dataAppPath;
        for(var i = 0; i<scripts.length; i++){
            if(utils.stringEndsWith(scripts[i].getAttribute('src'), 'doresh.js')){
                doreshScriptElement = scripts[i];
                break;
            }
        }
        dataAppPath = doreshScriptElement.getAttribute('data-app');
        return dataAppPath || 'app.js';
    }

    document.addEventListener("DOMContentLoaded", function() {
        var appScriptPath = getAppScriptPath();
        loadCodeFile(appScriptPath);
        resolveAsync(20, 0, 0);
    });
    return doresh;
})();