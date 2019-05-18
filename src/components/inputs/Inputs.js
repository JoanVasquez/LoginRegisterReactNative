import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Item, Input } from 'native-base';

class Inputs extends Component {
  inputs = props => {
    return <Input {...props} />;
  };

  render() {
    let items = [];
    {
      this.props.properties.forEach(item =>
        items.push(
          <Item rounded={item.rounded}>
            <Field {...items.inputProps} />
          </Item>
        )
      );
    }

    return items;
  }
}

export default Inputs;
/**
 * 
            inputProps: {
              placeholder='User Email...'
            },
            itemProps: {
              rounded="true"
            }
          },
          {
            inputProps: {
              placeholder='User Password...',
              secureTextEntry="true"
            },
            itemProps: {
              rounded="true"
            }
          }
 */
