
// import XRegExp from 'xregexp'; //TODO: why this is not working and we have to use CDNv

//SOLUTION 1
import * as XRegExp from 'xregexp';
import {Subject} from 'rxjs/Subject';
/*
this is working solution from
  https://stackoverflow.com/a/43122829/6178783
*/
/* SOLUTION 2
declare var require: any; //have to tell angular about global variable 'require' first
const XRegExp=require("xregexp");
*/

export class RegexService{
  regexInput:string;
  textInput:string;
  matchCount:number;
  flags:string='';
  regex:RegExp;
  replacedText:string;

  //subjects for communication
  replaceTextSubject=new Subject();
  matchCountSubject=new Subject();

  constructor(){}

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
    this.exec();
  }
  exec(){
    console.clear();
    this.matchCount = 0;
    if(this.regexInput!=null && this.textInput!=null) {
      this.regex=XRegExp(this.regexInput,this.flags);
      console.log(this.regexInput+'  '+this.flags);
      //if both values are entered

      this.replacedText = XRegExp.replace(this.textInput, this.regex, (match) => {
        /*
         mark whatever is matched according to regex, with something which can't occur in string,
         now we can color or style this text
         */
        this.matchCount++;
        if(this.matchCount%2!=0)
          return '<span class=\'match1\'>' + match + '</span>';
        else
          return '<span class=\'match2\'>' + match + '</span>';
      });
      this.replaceTextSubject.next(this.replacedText);

      //otherwise number of matchcounts are showing wrong as empty matches many
      //if we put if we are not getting our replacedText updated
      if(this.regexInput=='') this.matchCount=0;
    }

    this.matchCountSubject.next(this.matchCount);
    console.log(this.replacedText+' '+this.matchCount+' matches');
  }
}
