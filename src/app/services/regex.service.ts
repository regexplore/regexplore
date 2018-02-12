// import XRegExp from 'xregexp'; //TODO: why this is not working and we have to use CDN

export class RegexService{
  regexInput:string;
  textInput:string;
  matchCount:number;
  flags:string="";
  regex:RegExp;
  replacedString:string;

  constructor(){
    console.log('constructor is being called');
  }
  regexFieldChange(newRegex:string){
    this.regexInput=newRegex;
    this.exec();
  }
  textFieldChange(newText:string){
    this.textInput=newText;
    this.exec();
  }
  flagFieldChange(newFlags:string){
    this.flags=newFlags;
  }
  exec(){
    console.clear();
    this.regex=XRegExp(this.regexInput,this.flags);
    console.log(this.regexInput);
    // console.log(this.textInput);

    //if both values are entered
    if(this.regexInput!=null && this.textInput!=null) {

      this.replacedString = XRegExp.replace(this.textInput, this.regex, function (match) {
        /*
         mark whatever is matched according to regex, with something which can't occur in string,
         now we can color or style this text
         */
        return "^^^" + match + "^^^";
      });
    }
    console.log(this.replacedString);

  }
}
