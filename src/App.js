import React, { Suspense, useLayoutEffect } from 'react'
// import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { HashRouter as Router, Route, withRouter } from 'react-router-dom';
// HashRouter
// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Homefour = React.lazy(() => import("./components/pages/Homefour"));
const Bloggrid = React.lazy(() => import("./components/pages/Whereweare"));
const Whereweare = React.lazy(() => import("./components/pages/Whereweare"));
const Blogmain = React.lazy(() => import("./components/pages/Blogmain"));
const WhoWeare = React.lazy(() => import("./components/pages/Blogfull"));
const Blogsingle = React.lazy(() => import("./components/pages/Blogsingle"));
const About = React.lazy(() => import("./components/pages/About"));
// const Login = React.lazy(() => import("./components/pages/Login"));
// const Register = React.lazy(() => import("./components/pages/Register"));
// const Checkout = React.lazy(() => import("./components/pages/Checkout"));
// const Cart = React.lazy(() => import("./components/pages/Cart"));
// const Legal = React.lazy(() => import("./components/pages/Legal"));
const Error = React.lazy(() => import("./components/pages/Error"));
const Menuone = React.lazy(() => import("./components/pages/Menuone"));
const Menutwo = React.lazy(() => import("./components/pages/Menutwo"));
const Menuitemone = React.lazy(() => import("./components/pages/Menuitemone"));
const Menuitemtwo = React.lazy(() => import("./components/pages/Menuitemtwo"));
const Locations = React.lazy(() => import("./components/pages/Locations"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
// legal links
const Terms = React.lazy(() => import("./components/pages/Terms-and-conditions"));
const PrivacyPolicy = React.lazy(() => import("./components/pages/Privacy-policy"));
const shippingpolicy = React.lazy(() => import("./components/pages/ShippingPolicy"));
const refundpolicy = React.lazy(() => import("./components/pages/RefundPolicy"));
const paymentploicy = React.lazy(() => import("./components/pages/paymentservices"));
const Contactus = React.lazy(() => import("./components/pages/Contactus"));
const Awards = React.lazy(() => import("./components/pages/Awards"));
const CSRactivities = React.lazy(() => import("./components/pages/CSRactivities"));
const Gallery = React.lazy(() => import("./components/pages/Gallery"));

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router hashType='noslash' basename='/' >
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Preloader />
          <Route exact path="/"  component={Home}/>
          <Route path="/home-v2" component={Hometwo}/>
          <Route path="/news-room" component={Homethree}/>
          <Route path="/home-v4" component={Homefour}/>
          <Route path="/blog-grid" exact component={Bloggrid} />
          <Route path="/blog/tag/:tagId" exact component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
          <Route path="/Where-we-are" component={Whereweare} />
          <Route path="/blog" component={Blogmain} />
          <Route path="/Who-we-are" component={WhoWeare} />
          <Route path="/blog-single/:id" exact component={props => (<Blogsingle {...props} key={window.location.pathname} />)} />
          <Route path="/about" component={About} />
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cart" component={Cart} />
          <Route path="/legal" component={Legal} /> */}
          <Route path="/error" component={Error} />
          <Route path="/tenali-double-horse-products" component={Menuone} />
          <Route path="/tenali-double-hosre-food-products" component={Menutwo} />
          <Route path="/menu-item-v1/:id" exact component={props => (<Menuitemone {...props} key={window.location.pathname} />)} />
          <Route path="/menu-item-v2/:id" exact component={props => (<Menuitemtwo {...props} key={window.location.pathname} />)} />
          <Route path="/locations" component={Locations} />
          <Route path="/usa-shops" component={Contact} />
          <Route path="/terms-and-condation" component={Terms} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/shipping-policy" component={shippingpolicy} />
          <Route path="/refund-policy" component={refundpolicy} />
          <Route path="/payment-ploicy" component={paymentploicy} />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/awards-recognitions" component={Awards} />
          <Route path="/csr-activities" component={CSRactivities} />
          <Route path="/Csrgallery" component={Gallery} />
          
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
