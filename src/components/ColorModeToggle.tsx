import React from 'react';
import { TiAdjustBrightness, TiWeatherNight } from 'react-icons/ti';
import Switch from 'react-switch';
import styled from 'styled-components';

const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;

  .icon {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #222;
    font-size: 14px;
    font-weight: 900;
  }
`;

interface Props {
  themeState: string;
  onChangeTheme: () => void;
}

const ColorModeToggle = ({ themeState, onChangeTheme }: Props) => {
  const checked = themeState === 'dark' ? true : false;
  return (
    <ToggleButton>
      <Switch
        onChange={onChangeTheme}
        checked={checked}
        id="normal-switch"
        height={24}
        width={48}
        checkedIcon={
          <div className="icon checkedIcon">
            <TiWeatherNight size="24" />
          </div>
        }
        uncheckedIcon={
          <div className="icon uncheckedIcon">
            <TiAdjustBrightness size="24" />
          </div>
        }
        offColor={'#d9dfe2'}
        offHandleColor={'#fff'}
        onColor={'#999'}
        onHandleColor={'#282c35'}
      />
    </ToggleButton>
  );
};

export default ColorModeToggle;
