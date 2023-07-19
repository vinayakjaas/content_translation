import { Component , OnInit} from '@angular/core';
declare var google: any;


@Component({
  selector: 'lib-googletranslate',
  template: `
  <div class="fixed-con"> 
  <h1>Hello my name is vinayak raj ranjan</h1>
  <div id="google_translate_element"></div>
</div>
  `,
  styles: [
    `.VIpgJd-ZVi9od-aZ2wEe-wOHMyf{
      z-index: 9724790009779!important;
      top:0;
      left:unset;
      right:-5px;
      display:none!important;
      border-radius:50%;
      border:2px solid gold;
     }
     .VIpgJd-ZVi9od-aZ2wEe-OiiCO{
       width:80px;
       height:80px;
     }
      /*hide google translate link | logo | banner-frame */
      .goog-logo-link,.gskiptranslate,.goog-te-gadget span,.goog-te-banner-frame,#goog-gt-tt, .goog-te-balloon-frame,div#goog-gt-{
       display: none!important;
     }
     .goog-te-gadget {
       color: transparent!important;
       font-size:0px;
     }
   
     .goog-text-highlight {
       background: none !important;
       box-shadow: none !important;
     }
      
    /*google translate Dropdown */
    
    #google_translate_element select{
    background:#f6edfd;
    color:#383ffa;
    border: none;
    border-radius:3px;
    padding:6px 8px
    }`
  ]
})
export class GoogletranslateComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.loadGoogleTranslate();
  }

  loadGoogleTranslate() {
    const script = document.createElement('script');
    script.innerHTML = `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,bn,te,mr,ta,ur,gu,kn,or,ml,pa',
          autoDisplay: true,
          layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
        }, 'google_translate_element');
      }
    `;
    document.head.appendChild(script);

    const translateScript = document.createElement('script');
    translateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(translateScript);
  }

}
