import { Component ,ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface ApiResponse {
  pipelineResponse?: {
    output?: {
      target?: string;
    }[];
  }[];
}

interface Language {
  sourceLanguage: string;
  targetLanguageList: string[];
}



@Component({
  selector: 'lib-texttranslation',
  templateUrl:'./texttranslation.component.html' ,
  styles: [
  ]
})
export class TexttranslationComponent implements AfterContentInit {
  @ContentChild('contentElement') contentElementRef?: ElementRef;

  language: Language = {
    sourceLanguage: 'en',
    targetLanguageList: [
      'sl',
      'as',
      'bn',
      'brx',
      'doi',
      'gom',
      'gu',
      'hi',
      'kn',
      'ks',
      'mai',
      'ml',
      'mni',
      'mr',
      'ne',
      'or',
      'pa',
      'sa',
      'sat',
      'sd',
      'ta',
      'te',
      'ur',
    ],
  };
  selectedTargetLanguage: string = 'sl';
  translatedOutput: string | undefined;
  showTranslation: boolean = false;

  constructor(private http: HttpClient) {}

  ngAfterContentInit() {
    this.translateContent();
  }

  translateContent() {
    if (!this.contentElementRef) return;

    const url = 'https://dhruva-api.bhashini.gov.in/services/inference/pipeline';
    const userId = '26f83e9d425a40a28ec59f944cb4da6c';
    const apiKey = '1829da2d40-6a44-4d3d-ac61-9850afd41175';
    const authorizationToken = 'cYZieH0OCn8PUZbylALnCkwvs8PYvAiYwiQ7FUj1V7_Vspia5jvxFs0T3R3-DXF_';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      userID: userId,
      ulcaApiKey: apiKey,
      Authorization: authorizationToken,
    });

    const text = this.getContent();

    const payload = {
      pipelineTasks: [
        {
          taskType: 'translation',
          config: {
            language: {
              sourceLanguage: this.language.sourceLanguage,
              targetLanguage: this.selectedTargetLanguage,
            },
            serviceId: 'ai4bharat/indictrans-v2-all-gpu--t4',
          },
        },
      ],
      inputData: {
        input: [
          {
            source: text,
          },
        ],
      },
    };

    this.http.post<ApiResponse>(url, payload, { headers }).subscribe(
      (response) => {
        if (
          response.pipelineResponse &&
          response.pipelineResponse.length > 0 &&
          response.pipelineResponse[0].output &&
          response.pipelineResponse[0].output.length > 0
        ) {
          this.translatedOutput = response.pipelineResponse[0].output[0].target;
          this.showTranslation = true;
        } else {
          this.translatedOutput = undefined;
          this.showTranslation = false;
        }
      },
      (error) => {
        console.error('API error:', error);
        this.translatedOutput = undefined;
        this.showTranslation = false;
      }
    );
  }

  getContent(): string {
    return this.contentElementRef?.nativeElement.innerText.trim() || '';
  }

  getLanguageName(code: string): string {
    const language = this.language.targetLanguageList.find((lang) => lang === code);
    return language ? this.getLanguageDisplayName(language) : '';
  }

  getLanguageDisplayName(code: string): string {
    switch (code) {
      case 'sl':
        return 'Select Language';
      case 'as':
        return 'Assamese';
      case 'bn':
        return 'Bengali';
      case 'brx':
        return 'Bodo';
      case 'doi':
        return 'Dogri';
      case 'gom':
        return 'Konkani';
      case 'gu':
        return 'Gujarati';
      case 'hi':
        return 'Hindi';
      case 'kn':
        return 'Kannada';
      case 'ks':
        return 'Kashmiri';
      case 'mai':
        return 'Maithili';
      case 'ml':
        return 'Malayalam';
      case 'mni':
        return 'Manipuri';
      case 'mr':
        return 'Marathi';
      case 'ne':
        return 'Nepali';
      case 'or':
        return 'Odia';
      case 'pa':
        return 'Punjabi';
      case 'sa':
        return 'Sanskrit';
      case 'sat':
        return 'Santali';
      case 'sd':
        return 'Sindhi';
      case 'ta':
        return 'Tamil';
      case 'te':
        return 'Telugu';
      case 'ur':
        return 'Urdu';
      default:
        return '';
    }
  }

}
