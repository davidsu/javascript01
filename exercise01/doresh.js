var doresh = new (function(){
    var self = this;
    this.executionDrishot = {};
    function DrishObj(dependencies, callback, filePath){
        this.initialized = false;
        this.dependencies = dependencies;
        this.execute = callback;
        this.returnedValue = undefined;
        this.filePath = filePath;
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
        document.body.appendChild(script);
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

    function resolveAsync(){
        setTimeout(function verifyResolves() {
            if(resolve()){
                resolveAsync();
            }
        }, 0);
    }
    function doresh(filePath, drishot, callback){
        if(self.executionDrishot[filePath]){
            return;
        }
        self.executionDrishot[filePath] = new DrishObj(drishot, callback, filePath);
        resolveAsync();
    }

    doresh.bind(this);

    loadCodeFile('app.js');

    return doresh;
})();