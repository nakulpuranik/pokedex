import React, {Component} from "react";
import { FlatList } from "react-native";
import { ListItem, Text } from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

class FlatListCustom extends Component {
  static propTypes = {
      content: PropTypes.array.isRequired,
    }

  render () {
      const { content, rowKey ,rowOnClickData, onItemClick, preFix } = this.props;
      
      if(rowOnClickData){

          return(
              <FlatList data={ content }
                  renderItem={({item}) => ( <ListItem button onPress={() => { onItemClick(item[rowOnClickData]); }}>
                                              <Text>
                                                  
                                              {    [preFix ? [`${preFix} ${item[rowKey]}`] : item[rowKey]] }
                                              </Text>
                                            </ListItem>
                                          )}
                   keyExtractor={() => Math.random().toString(36).substr(2, 9)}
              />
          );
      }
      return(
          <FlatList data={ content }
              renderItem={({item}) => ( <ListItem>
                                          <Text>
                                              {`${item[rowKey]}`}
                                          </Text>
                                        </ListItem>
                                      )}
               keyExtractor={() => Math.random().toString(36).substr(2, 9)}
          />
      );
  }
}

export default withNavigation(FlatListCustom);
