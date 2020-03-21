import React from 'react';
import Ioicons from 'react-ionicons';

const CreateBtn = ({ onClick }) => (
  <div style={{margin:'2em 0', width:'100%'}}>
    <button type="button" className="btn btn-primary" style={{width:'100%'}} onClick={onClick}>
      <Ioicons
        className="rounded-circle"
        fontSize="25px"
        style={{backgroundColor:'#fff', marginRight:'4px', verticalAlign:'bottom'}}
        color={"#007bff"}
        icon='ios-add'
      />
      创建一条新记录
    </button>
  </div>
)

export default CreateBtn