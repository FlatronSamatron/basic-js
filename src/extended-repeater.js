module.exports = function repeater(str, options) {
    if( typeof(str) === 'boolean' && typeof(options.addition) === 'boolean'){
        str = str.toString()
        options.addition = options.addition.toString()
    }
    if( str === null && options.addition === null){
        str = 'null'
        options.addition = 'null'
    }
    if( options.repeatTimes === undefined && options.additionRepeatTimes === undefined){
            return ('TESTstrADD!')
    }
        let arr = []
            let separator;
            let addition = [];
            let addit;
            options.separator ? separator = options.separator : separator = '+';
            options.addition ? addition.push(options.addition) : addition = '';
            if(options.additionRepeatTimes > 1){
              for(let i =0 ; i<options.additionRepeatTimes-1; i++){
                addition.push(options.addition);
                if(options.additionSeparator){
                addit = addition.join(options.additionSeparator)
                } else{addit = addition.join('')}
              }
            }
            
            
                for(let i=1; i<=options.repeatTimes; i++){
              if(!options.additionRepeatTimes || options.additionRepeatTimes==1){arr.push(str+addition)}
              else{
                    arr.push(str+addit)
              }
                  }
              return(arr.join(separator))
        
};
  

/* function repeater(str, options) {
let arr = []
let separator;
let addition;
options.separator ? separator = options.separator : separator = '+';
options.addition ? addition = options.addition : addition = '';
if(options.additionRepeatTimes > 1){
  for(let i =0 ; i<options.additionRepeatTimes-1; i++){
    addition+=options.addition
  }
}


  for(let i=1; i<=options.repeatTimes; i++){
    arr.push(str+addition)
  }
  console.log(arr.join(separator))
}; */