import React from "react";
function Boxes(styles) {
   return (
      <div className={styles.box}>
         <p className={styles.font}>Total Patients</p>
         <div className={styles.number}>1</div>
      </div>
   );
}

export default Boxes;
