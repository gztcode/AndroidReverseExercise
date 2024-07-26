

function hook_java(){
    Java.perform(()=>{
        let LoginActivity = Java.use("com.example.androiddemo.Activity.LoginActivity");
        LoginActivity["a"].overload('java.lang.String', 'java.lang.String').implementation = function (str, str2) {
            console.log(`LoginActivity.m10a is called: str=${str}, str2=${str2}`);
            let result = this["a"](str, str2);
            console.log(`LoginActivity.m10a result=${result}`);

            return str2;
        };

        let FridaActivity1 = Java.use("com.example.androiddemo.Activity.FridaActivity1");
        FridaActivity1["a"].implementation = function (bArr) {
            console.log(`FridaActivity1.m8a is called: bArr=${bArr}`);
            let result = this["a"](bArr);
            console.log(`FridaActivity1.m8a result=${result}`);
            return "R4jSLLLLLLLLLLOrLE7/5B+Z6fsl65yj6BgC6YWz66gO6g2t65Pk6a+P65NK44NNROl0wNOLLLL=";
        };
        let FridaActivity2 = Java.use("com.example.androiddemo.Activity.FridaActivity2");
        FridaActivity2["onCheck"].implementation = function () {
            console.log(`FridaActivity2.onCheck is called`);
            call_FridaActivity2()
            this["onCheck"]();
        };

        let FridaActivity3 = Java.use("com.example.androiddemo.Activity.FridaActivity3");
        FridaActivity3["onCheck"].implementation = function () {
            console.log(`FridaActivity3.onCheck is called`);
            call_FridaActivity3()
            this["onCheck"]();
        };

        let FridaActivity4 = Java.use("com.example.androiddemo.Activity.FridaActivity4");
        FridaActivity4["onCheck"].implementation = function () {
            console.log(`FridaActivity4.onCheck is called`);
            // hook_FridaActivity4_InnerClasses()
            hook_FridaActivity4_InnerClasses_mul()
            this["onCheck"]();
        };
        let FridaActivity5 = Java.use("com.example.androiddemo.Activity.FridaActivity5");
        FridaActivity5["onCheck"].implementation = function () {
            console.log(`FridaActivity5.onCheck is called`);
            hook_dyn_dex();
            this["onCheck"]();
        };

        let FridaActivity6 = Java.use("com.example.androiddemo.Activity.FridaActivity6");
        FridaActivity6["onCheck"].implementation = function () {
            console.log(`FridaActivity6.onCheck is called`);
            // call_FridaActivity6();
            call_FridaActivity6_mul();
            this["onCheck"]();
        };

    })
}

function call_FridaActivity2(){
    Java.perform(()=>{
        let FridaActivity2 = Java.use("com.example.androiddemo.Activity.FridaActivity2");
        Java.choose("com.example.androiddemo.Activity.FridaActivity2",{
            onMatch:(instance)=>{
                instance.setBool_var()
            },onComplete:()=>{
                console.log(`FridaActivity2.setBool_var is called`);
    
            }
        })

        FridaActivity2["setStatic_bool_var"]();
    })
}

function call_FridaActivity3(){
    Java.perform(()=>{
        let FridaActivity3 = Java.use("com.example.androiddemo.Activity.FridaActivity3");
        FridaActivity3.static_bool_var.value=true;

        Java.choose("com.example.androiddemo.Activity.FridaActivity3",{
            onMatch:(instance)=>{
                instance.bool_var.value = true;
                instance._same_name_bool_var.value = true;
            },onComplete:()=>{
                console.log(`FridaActivity3.bool_var is called`);
    
            }
        })

        
    })
}

function hook_FridaActivity4_InnerClasses(){
    Java.perform(()=>{
        
        let InnerClasses = Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses");
        InnerClasses["check1"].implementation = function () {
            console.log(`InnerClasses.check1 is called`);
            let result = this["check1"]();
            console.log(`InnerClasses.check1 result=${result}`);
            return true;
        };
        InnerClasses["check2"].implementation = function () {
            console.log(`InnerClasses.check2 is called`);
            let result = this["check2"]();
            console.log(`InnerClasses.check2 result=${result}`);
            return true;
        };
        InnerClasses["check3"].implementation = function () {
            console.log(`InnerClasses.check3 is called`);
            let result = this["check3"]();
            console.log(`InnerClasses.check3 result=${result}`);
            return true;
        };
        InnerClasses["check4"].implementation = function () {
            console.log(`InnerClasses.check4 is called`);
            let result = this["check4"]();
            console.log(`InnerClasses.check4 result=${result}`);
            return true;
        };
        InnerClasses["check5"].implementation = function () {
            console.log(`InnerClasses.check5 is called`);
            let result = this["check5"]();
            console.log(`InnerClasses.check5 result=${result}`);
            return true;
        };
        InnerClasses["check6"].implementation = function () {
            console.log(`InnerClasses.check6 is called`);
            let result = this["check6"]();
            console.log(`InnerClasses.check6 result=${result}`);
            return true;
        };
    })
}
function hook_FridaActivity4_InnerClasses_mul(){
    Java.perform(()=>{
        let class_name = "com.example.androiddemo.Activity.FridaActivity4$InnerClasses";
        let InnerClasses = Java.use(class_name);
        var all_methods =InnerClasses.class.getDeclaredMethods();
        for (let i = 0; i < all_methods.length; i++) {
            const method = all_methods[i].toString();
            var substring = method.substr(method.indexOf(class_name) + class_name.length+1);
            var method_name = substring.substr(0,substring.indexOf("("));
            InnerClasses[method_name].implementation = function () {
                console.log(`InnerClasses`+method_name+` is called`);
                let result = this[method_name]();
                console.log(`InnerClasses`+method_name+` result=${result}`);
                return true;
            };
        }
    })
}


function hook_dyn_dex(){
    Java.perform(()=>{
        
        let FridaActivity5 = Java.use("com.example.androiddemo.Activity.FridaActivity5");
        FridaActivity5["getDynamicDexCheck"].implementation = function () {
            console.log(`FridaActivity5.getDynamicDexCheck is called`);
            let result = this["getDynamicDexCheck"]();
            console.log(`FridaActivity5.getDynamicDexCheck result=${result.$className}`);
            return result;
        };
        // Java.choose("com.example.androiddemo.Activity.FridaActivity5",{
        //     onMatch:(instance)=>{
        //         instance.getDynamicDexCheck();
        //     },
        //     onComplete:()=>{

        //     }
        // })
        /// 找不到该类Error: java.lang.ClassNotFoundException: Didn't find class "com.example.androiddemo.Dynamic.DynamicCheck" on path: DexPathList[[zip file "/data/app/com.example.androiddemo-8f2okxVROHRO8uHXhuWD8g==/base.apk"],nativeLibraryDirectories=[/data/app/com.example.androiddemo-8f2okxVROHRO8uHXhuWD8g==/lib/arm64, /data/app/com.example.androiddemo-8f2okxVROHRO8uHXhuWD8g==/base.apk!/lib/arm64-v8a, /system/lib64, /system/product/lib64]]
        // let DynamicCheck = Java.use("com.example.androiddemo.Dynamic.DynamicCheck");
        // console.log(DynamicCheck);

        Java.enumerateClassLoaders({
            onMatch(loader){
               try {
                if(loader.findClass("com.example.androiddemo.Dynamic.DynamicCheck")){
                    console.log("dy "+loader);
                    Java.classFactory.loader = loader
                }
               } catch (error) {
                
               }
                
            },
            onComplete(){

            }
        })
 
        let CheckInterface = Java.use("com.example.androiddemo.Dynamic.DynamicCheck");
        CheckInterface["check"].implementation = function () {
            console.log(`CheckInterface.check is called`);
            let result = this["check"]();
            console.log(`CheckInterface.check result=${result}`);
            return true;
            };  
        })

      
}

function call_FridaActivity6(){
    Java.perform(()=>{
        let Frida6Class0 = Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class0");
        Frida6Class0["check"].implementation = function () {
            console.log(`Frida6Class0.check is called`);
            let result = this["check"]();
            console.log(`Frida6Class0.check result=${result}`);
            return true;
        };

        let Frida6Class1 = Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class1");
        Frida6Class1["check"].implementation = function () {
            console.log(`Frida6Class1.check is called`);
            let result = this["check"]();
            console.log(`Frida6Class1.check result=${result}`);
            return true;
        };

        let Frida6Class2 = Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class2");
        Frida6Class2["check"].implementation = function () {
            console.log(`Frida6Class2.check is called`);
            let result = this["check"]();
            console.log(`Frida6Class2.check result=${result}`);
            return true;
        };

    })
}

function call_FridaActivity6_mul(){
    Java.perform(()=>{
        Java.enumerateLoadedClasses({
            onMatch:(name,handle)=>{
                try {
                    if(name.indexOf("com.example.androiddemo.Activity.Frida6.Frida6")>=0){
                        console.log(name);
                        let Frida6Class0 = Java.use(name);
                        Frida6Class0["check"].implementation = function () {
                            console.log(name+`.check is called`);
                            let result = this["check"]();
                            console.log(name+`.check result=${result}`);
                            return true;
                        };
                    }
                    
                } catch (error) {
                    
                }
            },onComplete:()=>{

            }
        })
       

        

    })
}





function main() {
    hook_java();
}


setImmediate(main)