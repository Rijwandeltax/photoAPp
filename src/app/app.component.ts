import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninProvider } from '../providers/signin/signin';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';
  loggedIn = false;
  pages: Array<{title: string, component: any}>;

  loggedInPages = [
    { title: 'Home', component: 'HomePage' },
    {title:'Testimonial', component:'TestimonialPage'},
    {title:'Contact', component:'ContactPage'},
    {title:'About', component:'AboutPage'},
    {title:'Portfolio', component:'PortfolioPage'},
    {title:'Submit Query', component:'SubmitQueryPage'},
    {title:'Testimonil Query', component:'TestimonilQueryPage'},
    {title:'Image Upload', component:'ImageUploadPage'},
    {title:'Albam', component:'AlbamPage'},
    {title:'Security Setting', component:'SecuritySettingPage'},
    {title:'Sign Out', component:'SignOutPage'}
  ];

  loggedOutPages = [
    { title: 'Home', component: 'HomePage' },
    {title:'Testimonial', component:'TestimonialPage'},
    {title:'Contact', component:'ContactPage'},
    {title:'About', component:'AboutPage'},
    {title:'Portfolio', component:'PortfolioPage'},
    {title:'Submit Query', component:'SubmitQueryPage'},
    {title:'Image Upload', component:'ImageUploadPage'},
    {title:'Sign In', component:'SignInPage'}
  ];

  constructor(private events: Events,public service:SigninProvider,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.service.getData().then(data=>{
      alert(data);
    });
     this.listenToLoginEvents();

    


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      {title:'Testimonial', component:'TestimonialPage'},
      {title:'Contact', component:'ContactPage'},
      {title:'About', component:'AboutPage'},
      {title:'Portfolio', component:'PortfolioPage'},
      {title:'Portfolio Photos', component:'PortfolioPhotosPage'},
      {title:'Portfolio Videos', component:'PortfolioVideoPage'},
      {title:'Submit Query', component:'SubmitQueryPage'},
      {title:'Testimonil Query', component:'TestimonilQueryPage'},
      {title:'Image Upload', component:'ImageUploadPage'},
      {title:'Albam', component:'AlbamPage'},
      {title:'Full Albam', component:'FullAlbamPage'},
      {title:'Security Setting', component:'SecuritySettingPage'},
      {title:'Sign In', component:'SignInPage'}
    ];
    
  }
 
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.loggedIn = true;
    });

    this.events.subscribe('user:logout', () => {
      this.loggedIn = false;
    });
  }
}
