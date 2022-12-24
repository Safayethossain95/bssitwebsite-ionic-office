import { IonPage } from '@ionic/react';

import DemoComponent from '../components/DemoComponent';

import './Page.css';

const Page: React.FC = () => {

  

  return (
    <IonPage>
      
      
      {/* <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent> */}

      <DemoComponent/>
    </IonPage>
  );
};

export default Page;
