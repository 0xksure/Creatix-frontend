import React from 'react';
import { IconProps } from 'Components/Icons/types';

interface Props {
  Logo?: React.FC<IconProps>;
}

const FormBox: React.FC<Props> = (props) => {
  const { Logo, children } = props;
  return (
    <div className="horizontal-center margin-top-l">
      <div className="grid-x content-card padding-horizontal-l padding-vertical-s horizontal-left">
        <div className="cell small-12 ">
          {Logo && (
            <div className="cell horizontal-center padding-vertical-m">
              <Logo className="svg-logo icon-m " />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
export default FormBox;
