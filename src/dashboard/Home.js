import React, {Component} from "react";
import { View, Text } from "native-base";
import FlatList from "../components/FlatListCustom";

class Home extends Component{

  render(){
    const sampleData = [{"name":"ABC"},{"name":"PQR"},{"name":"XYZ"},{"name":"LMN"},{"name":"ABC"},{"name":"PQR"},{"name":"XYZ"},{"name":"LMN"},{"name":"ABC"},{"name":"PQR"},{"name":"XYZ"},{"name":"LMN"}]
    return(
      <View>
        <FlatList
          content={sampleData}
          rowKey={"name"}
        />
      </View>
    );
  }
}

export default Home;