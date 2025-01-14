import {IonButton, IonPage, IonLabel, IonInput, IonItem, IonTextarea, IonSelect, IonSelectOption, IonDatetime, IonText, IonPopover, IonChip, IonIcon} from '@ionic/react';
import { pin, heart, closeCircle, close } from 'ionicons/icons';
import React, {useState, useEffect} from 'react';

import Header from '../../Framework/Header';
import './New.scss';
import ChooseThreads from './ChooseThreads';
import { format, parseISO } from 'date-fns';

const New: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const formatDate = (value: string) => {
    return format(parseISO(value), 'MMM dd yyyy');
  };

  return(
    <IonPage className="new-page-wrapper">
      <Header />
      <div className="content-wrapper">
        <div className="header-info">
          <h3>Create a New Manufacturing Readiness Assessment</h3>
          <p>Fill out the fields (* = required) to create a new assessment. You can add team members and customize which threads you want included in your assessment.</p>
        </div>
        <div className="panel-wrappers">
          <div className="assessment-info">
            <h3>Assessment Information</h3>
            <IonItem color="dark">
              <IonLabel position="floating">Assessment Name* (0/50)</IonLabel>
              <IonInput placeholder=""></IonInput>
            </IonItem>
            <IonItem color="dark">
              <IonLabel position="floating">Target MRL*</IonLabel>
              <IonSelect interface="popover">
                <IonSelectOption value="1">1</IonSelectOption>
                <IonSelectOption value="2">2</IonSelectOption>
                <IonSelectOption value="3">3</IonSelectOption>
                <IonSelectOption value="4">4</IonSelectOption>
                <IonSelectOption value="5">5</IonSelectOption>
                <IonSelectOption value="6">6</IonSelectOption>
                <IonSelectOption value="7">7</IonSelectOption>
                <IonSelectOption value="8">8</IonSelectOption>
                <IonSelectOption value="9">9</IonSelectOption>
                <IonSelectOption value="10">10</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem color="dark">
              <IonLabel position="floating">Level Switching</IonLabel>
              <IonSelect interface="popover">
                <IonSelectOption value="yes">Yes</IonSelectOption>
                <IonSelectOption value="no">No</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem button={true} id="open-date-input" color="dark">
              <IonLabel>Date</IonLabel>
              <IonText slot="end">{selectedDate}</IonText>
              <IonPopover trigger="open-date-input" showBackdrop={false}>
                <IonDatetime
                  presentation="date"
                  onIonChange={ev => setSelectedDate(formatDate(ev.detail.value!))}
                />
              </IonPopover>
            </IonItem>
            <IonItem color="dark">
              <IonLabel position="floating">Location</IonLabel>
              <IonInput placeholder=""></IonInput>
            </IonItem>
            <IonItem color="dark">
              <IonLabel position="floating">Additional Information</IonLabel>
              <IonTextarea placeholder=""></IonTextarea>
            </IonItem>
            <IonItem color="dark">
              <IonLabel position="floating">Deskbook Version*</IonLabel>
              <IonSelect interface="popover">
                <IonSelectOption value="2020">2020</IonSelectOption>
                <IonSelectOption value="2018">2018</IonSelectOption>
              </IonSelect>
            </IonItem>
            <div className="start-button">
              <p><i>Make sure the correct threads have been selected and team members have been added</i></p>
              <IonButton color="dsb" expand='full'>Start Assessment</IonButton>
            </div>
          </div>
          <div className="assessment-choices">
            <h3>Add Team Members</h3>
            <div className="tm-fields-wrapper">
              <IonItem color="dark">
                <IonLabel position="floating">Member Email</IonLabel>
                <IonInput placeholder=""></IonInput>
              </IonItem>
              <IonItem color="dark">
                <IonLabel position="floating">Member Role</IonLabel>
                <IonInput placeholder=""></IonInput>
              </IonItem>
            </div>
            <IonButton color="dsb" expand='full' >Add Team Member</IonButton>

            <div className="added-members">
              <IonChip  color="light">
                <IonLabel color="light">Email: <b>user1@company.com</b> Role: <b>circuitry</b></IonLabel>
                <IonIcon icon={closeCircle} />
              </IonChip>
              <IonChip  color="light">
                <IonLabel color="light">Email: <b>user2@company.com</b> Role: <b>hardware</b></IonLabel>
                <IonIcon icon={closeCircle} />
              </IonChip>
              <IonChip  color="light">
                <IonLabel color="light">Email: <b>user3@company.com</b> Role: <b>design</b></IonLabel>
                <IonIcon icon={closeCircle} />
              </IonChip>
            </div>
            <ChooseThreads />

          </div>
        </div>
      </div>
    </IonPage>
  )
}
export default New;

// <IonItem color="dark">
// <IonLabel position="floating">Date to Achieve Target MRL</IonLabel>
// <IonInput placeholder=""></IonInput>
//
// </IonItem>
