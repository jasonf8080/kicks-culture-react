import styled from 'styled-components';

const Wrapper = styled.div`
.footer,
.mobile-footer{
  background: var(---black);
  color: white;
  padding: 25px 0 90px;
}

.mobile-footer {
 
  padding: 25px 0 50px;
}

.mobile-footer{
  display: none;
}

.footer-bottom {
  padding: 20px 0 30px;
}

.white-line {
  height: 1px;
  background: rgb(30, 30, 30);
  width: 100%;
}

.product .white-line {
  width: 85%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.2);
}

.footer-grid {
  display: grid;
  grid-template-columns: 4fr 100px;
  column-gap: 50px;
}

.footer-inner-grid {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  column-gap: 20px;
}

.footer-img-container {
  position: relative;
}

.footer-logo {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100px;
  height: auto;
  text-align: left;
}

.footer h3, .mobile-footer h3 {
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  flex-direction: column;
}

.footer-links a, .social-icons a {
  color: white !important;
  margin-bottom: 10px;
}

.subscribe-msg {
  margin-bottom: 20px;
}

.input-container {
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  max-width: 300px;
  border-radius: var(--borderRadius);
}

.input-container input {
  height: inherit;
  width: 100%;
  border: none;
  outline: none;
}



.input-container button {
  background: transparent;
}

.social-icons {
  display: flex;
  align-items: center;
}

.social-icons span {
  font-size: 30px;
  margin-right: 20px;
}

.footer-bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom button {
  background: black;
  color: white;
  text-decoration: underline;
  text-transform: uppercase;
}

@media(max-width: 1024px){
  .footer, .footer-bottom{
    display: none;
  }

  .mobile-footer, .mobile-footer-bottom{
    display: block;
  }

  .mobile-footer-grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }

    .footer-logo {
      position: static;
      max-width: 130px;
      text-align: right;
    }
}

@media(max-width: 768px) {


  .mobile-footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

    .footer-img-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .social-icons{
      justify-content: center;
      align-items: center;
    }

}
`;

export default Wrapper