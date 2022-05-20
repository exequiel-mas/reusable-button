import React from 'react';
import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Reusable Button by Exequiel Massimelli</h4>
      <div className="fila">
        <strong>Sizes:</strong>
        <Button sizes="sm" disableShadow color="default">
          Small
        </Button>
        <Button sizes="md" disableShadow color="default">
          Medium
        </Button>
        <Button sizes="lg" disableShadow color="default">
          Large
        </Button>
      </div>
      <div className="fila">
        <strong>Variants:</strong>
        <Button sizes="sm">Shadow</Button>
        <Button sizes="sm" variant="outline" disableShadow>
          Outline
        </Button>
        <Button sizes="md" disabled disableShadow>
          Disabled
        </Button>
        <Button variant="text" disableShadow>
          Text
        </Button>
      </div>
      <div className="fila">
        <strong>Colors:</strong>
        <Button sizes="sm" color="default" disableShadow>
          Default
        </Button>
        <Button sizes="sm" color="primary" disableShadow>
          Primary
        </Button>
        <Button sizes="sm" color="secondary" disableShadow>
          Secondary
        </Button>
        <Button sizes="sm" color="danger" disableShadow>
          Danger
        </Button>
      </div>
      <br />
      <br />
      <br />
      <strong>External Classes:</strong>
      <Button sizes="sm" color="primary" disableShadow className="capital">
        CAPITALIZE
      </Button>
    </div>
  );
}

export default App;
