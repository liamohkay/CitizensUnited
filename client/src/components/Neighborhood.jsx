import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Neighborhood = ({ fields, setFields }) => {
  const [hoodTitle, setHoodTitle] = useState('Select Neighborhood');

  const handleSelect = (e, f) => {
    setFields({...fields, neighborhood: e})
    setHoodTitle(f.target.innerText)
  }

  return (
    <div>
      <DropdownButton
        title={hoodTitle}
        name="neighborhood"
        type="neighborhood"
        value={fields.neighborhood}
        onSelect={handleSelect}>
          <Dropdown.Item eventKey="arlingtonHeights">Arlington Heights</Dropdown.Item>
          <Dropdown.Item eventKey="carthay">Carthay</Dropdown.Item>
          <Dropdown.Item eventKey="beverlyGrove">Beverly Grove</Dropdown.Item>
          <Dropdown.Item eventKey="chinatown">Chinatown</Dropdown.Item>
          <Dropdown.Item eventKey="downtown">Downtown</Dropdown.Item>
          <Dropdown.Item eventKey="eastHollywood">East Hollywood</Dropdown.Item>
          <Dropdown.Item eventKey="echoPark">Echo Park</Dropdown.Item>
          <Dropdown.Item eventKey="elysianPark">Elysian Park</Dropdown.Item>
          <Dropdown.Item eventKey="elysianValley">Elysian Valley</Dropdown.Item>
          <Dropdown.Item eventKey="fairfax">Fairfax</Dropdown.Item>
          <Dropdown.Item eventKey="griffithPark">Griffith Park</Dropdown.Item>
          <Dropdown.Item eventKey="hancockPark">Hancock Park</Dropdown.Item>
          <Dropdown.Item eventKey="harvardHeights">Harvard Heights</Dropdown.Item>
          <Dropdown.Item eventKey="hollywood">Hollywood</Dropdown.Item>
          <Dropdown.Item eventKey="hollywoodHills">Hollywood Hills</Dropdown.Item>
          <Dropdown.Item eventKey="hollywoodHillsWest">Hollywood Hills West</Dropdown.Item>
          <Dropdown.Item eventKey="koreatown">Koreatown</Dropdown.Item>
          <Dropdown.Item eventKey="larchmont">Larchmont</Dropdown.Item>
          <Dropdown.Item eventKey="losFeliz">Los Feliz</Dropdown.Item>
          <Dropdown.Item eventKey="midCity">Mid-City</Dropdown.Item>
          <Dropdown.Item eventKey="midWilshire">Mid-Wilshire</Dropdown.Item>
          <Dropdown.Item eventKey="picoUnion">Pico-Union</Dropdown.Item>
          <Dropdown.Item eventKey="silverLake">Silver Lake</Dropdown.Item>
          <Dropdown.Item eventKey="westHollywood">West Hollywood</Dropdown.Item>
          <Dropdown.Item eventKey="westlake">Westlake</Dropdown.Item>
          <Dropdown.Item eventKey="windsorSquare">Windsor Square</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default Neighborhood