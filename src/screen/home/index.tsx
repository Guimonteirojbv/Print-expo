import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { data } from '../../data'
import { ListItem } from "../../components/ListItem";



export function Home () {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Hello Printer
            </Text>

            <FlatList 
                data={data}
                keyExtractor={item => item.title}
                renderItem={({item}) => <ListItem {...item}/>}
                contentContainerStyle={{flex: 1}}
            />

        </View>
    )
}