import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyrightYear = new Date().getFullYear();
  quoteText;

  constructor(private quote: QuoteService) { }

  ngOnInit() {
    this.printQuote();
  }

  printQuote() {
    let quoteResp = [{ "q": "We take care of the future best by taking care of the present now.", "a": "Jon Kabat-Zinn", "h": "<blockquote>&ldquo;We take care of the future best by taking care of the present now.&rdquo; &mdash; <footer>Jon Kabat-Zinn</footer></blockquote>" }];
    this.quoteText = quoteResp[0];
    console.log(this.quoteText);
    // this.quote.getQuote().subscribe((resp) => {
    //   console.log('quote: ', quoteTemp);
    // });
  }

  showDocument(): void {
    var link = document.createElement('a');
    link.href = '/assets/Harish_Ale_Resume.pdf';
    link.download = 'Harish_Ale_Resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));


    // this.quote.getResume()
    //   .subscribe((blob: Blob): void => {
    //     const file = new Blob([blob], {type: 'application/pdf'});
    //     const fileURL = URL.createObjectURL(file);
    //     window.open(fileURL, '_blank', 'width=1000, height=800');
    //   });
  }
}
