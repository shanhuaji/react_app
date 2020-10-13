import React, { useEffect } from 'react';
import { connect } from 'umi';
export default connect(chart => chart)(function monitor({ dispatch }) {
  
  useEffect(() => {
    dispatch({
      type: 'chart/getG6Date',
    });
  }, []);

  return <div id='container'>Monitor</div>;
});
