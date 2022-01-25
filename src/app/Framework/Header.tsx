import './Framework.scss';
import {IonButton} from '@ionic/react'


const Header: React.FC = () => {
  return(
    <div className="header-wrapper">
      <h2 className="header-title">docent</h2>
      <div className="header-nav-wrapper">
        <IonButton expand='full' color="light" routerLink="/home">Home</IonButton>
        <IonButton expand='full' color="light">Help</IonButton>
        <IonButton expand='full' color="light">Logout</IonButton>
      </div>
    </div>
  )
}
export default Header;
