import React from 'react';
import './confused-cow.css';

function ConfusedCow() {
  return (
    <div className="animation confused-cow">
      <div className="confused-cow__background">
        <div className="confused-cow__background__sky"></div>
        <div className="confused-cow__background__grass"></div>
      </div>
      <div className="confused-cow__body">
        <div className="confused-cow__body__torso">
          <div className="confused-cow__body__torso__blob1"></div>
          <div className="confused-cow__body__torso__blob2"></div>
          <div className="confused-cow__body__torso__blob3"></div>
          <div className="confused-cow__body__torso__tail"></div>
        </div>
        <div className="confused-cow__body__head">
          <div className="confused-cow__body__head__background"></div>
          <div className="confused-cow__body__head__snout">
            <div className="confused-cow__body__head__snout__nostril1 confused-cow__body__head__snout__nostril"></div>
            <div className="confused-cow__body__head__snout__nostril2 confused-cow__body__head__snout__nostril"></div>
          </div>
          <div className="confused-cow__body__head__eye--left confused-cow__body__head__eye">
            <div className="confused-cow__body__head__eye__pupil"></div>
            <div className="confused-cow__body__head__eye__lid--bottom"></div>
          </div>
          <div className="confused-cow__body__head__eye--right confused-cow__body__head__eye">
            <div className="confused-cow__body__head__eye__pupil"></div>
          </div>

          <div className="confused-cow__body__head__eyebrow--left"></div>
          <div className="confused-cow__body__head__eyebrow--right"></div>
          <div className="confused-cow__body__head__ears1"></div>
          <div className="confused-cow__body__head__ears2"></div>
        </div>
        <div className="confused-cow__body__leg1 confused-cow__body__leg"></div>
        <div className="confused-cow__body__leg2 confused-cow__body__leg"></div>
        <div className="confused-cow__body__leg3 confused-cow__body__leg"></div>
        <div className="confused-cow__body__leg4 confused-cow__body__leg"></div>
      </div>
    </div>
  );
}

export default ConfusedCow;
