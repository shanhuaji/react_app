import React, { useEffect } from 'react';
import { connect } from 'umi';

export default connect(chart=>chart)
(function analysis({ dispatch}) {
  useEffect(() => {
    
    dispatch({
      type: 'chart/getG2Data',
    });
  }, []);
  return <div id='container' style={{height:'600px'}}>Analysis</div>;
});
