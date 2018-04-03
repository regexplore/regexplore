
// import XRegExp from 'xregexp'; //TODO: why this is not working and we have to use CDNv

//SOLUTION 1
// import * as XRegExp from 'xregexp';
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
  flags:string='';
  regex:RegExp;

  initialFlag:boolean=true; //for initial call in textFieldChanged()

  //subjects for communication
  regexChangeSubject=new Subject();
  matchCountSubject=new Subject();//handle matchcount and regexerror

  constructor(){}

  regexFieldChange(newRegex:string){
   console.log("Regexfield change");

    this.regexInput=newRegex;
    //we just need to it whenever regex change nothing needs to be done on text change
    this.exec();
  }
  textFieldChange(newText:string){
    this.textInput=newText;

    //need to be called here as when called for regexFieldChange() TextInput component was not made
    //so that didn't work
    // call only once required initially, but if we call everytime it will be a lot

    if(this.initialFlag) {
      this.initialFlag=false;
      console.log("called");
      this.exec();
    }
  }
  flagFieldChange(newFlags:string){
    this.flags=newFlags;
    this.exec();
  }
  exec(){
    this.regexChangeSubject.next({regex:this.regexInput,flags:this.flags});
    // // console.clear();
    // this.matchCount = 0;
    // if(this.regexInput!=null && this.textInput!=null) {
    //   this.regex=XRegExp(this.regexInput,this.flags);
    //   // console.log(this.regexInput+'  '+this.flags);
    //   //if both values are entered

    //   this.replacedText = XRegExp.replace(this.textInput, this.regex, (match) => {
    //     /*
    //      mark whatever is matched according to regex, with something which can't occur in string,
    //      now we can color or style this text
    //      */
    //     this.matchCount++;
    //     if(this.matchCount%2!=0)
    //       return '<span class=\'match1\'>' + match + '</span>';
    //     else
    //       return '<span class=\'match2\'>' + match + '</span>';
    //   });
    //   //just replacing all newline to <br> so that it should come in replaced text highlighted properly
    //   this.replacedText = this.replacedText.replace(/\n/g, "<br>");

    //   //the same problem with extra spaces need to be removed, but leaving anything inside <span> we added
    //   this.replacedText = this.replacedText.replace(/ (?!class='match)/g, "&nbsp;");

    //   this.replaceTextSubject.next(this.replacedText);

    //   //otherwise number of matchcounts are showing wrong as empty matches many
    //   //if we put if we are not getting our replacedText updated
    //   if(this.regexInput=='') this.matchCount=0;
    // }

    // this.matchCountSubject.next(this.matchCount);
    // // console.log("<"+this.textInput+'>---<'+this.replacedText+">");
  }
}
