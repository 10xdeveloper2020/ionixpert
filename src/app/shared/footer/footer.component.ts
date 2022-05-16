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
}
