import './App.css';
import './css/style.css'
import './css/general.css'
import './css/queries.css'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Collection from './components/Collection';
import { Purpose } from './components/Purpose';
// import Comments from './components/Feedback/Comments';
import { Donation } from './components/Donation';
import { Footer } from './components/Footer';
import { ContactUs } from './components/ContactUs';
import { AboutUs } from './components/AboutUs';
import CommentForm from './components/Test/CommentForm';
import Comments from './components/Test/Comments';


function App() {
  return (
    <>
      <Header />

      <main>
        {/* <HomePage />
        <AboutUs />
        <Purpose />
        <Collection />
        <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
        <Donation /> */}
        <CommentForm />
        {/* <Comments /> */}
        {/* <ContactUs /> */}
      </main >

      <Footer />
    </>
  );
}

export default App;
