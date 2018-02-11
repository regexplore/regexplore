// import {XRegExp} from 'xregexp';

export class RegexService{
  regex:string;
  text:string;

  regInstance:RegExp;
  matchedStrin:RegExpExecArray;

  constructor(){
   console.log('constructor is being called');
  }
  regexFieldChange(newRegex:string){
    this.regex=newRegex;
    this.exec();
  }
  textFieldChange(newText:string){
    this.text=newText;
    this.exec();
  }

  exec(){
    // this.regInstance=XRegExp("hello");
   // console.log('\n---------------------------');
   // console.log('-'+this.regex+"--"+this.text);
   // console.log(XRegExp.version());

   // this.matchedString=XRegExp.exec(this.regInstance);
   // console.log(this.matchedString);
   // console.log('---------------------------\n');
  // console.log(XRegExp.exec('helloooowere',this.regInstance));
  }
}
