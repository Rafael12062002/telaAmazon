import { TouchableOpacity, StyleSheet, Image } from "react-native";

export const MoviesCard=(props)=>{
    return(
        <TouchableOpacity>
            <Image style={styles.ing} source={props.movieURL}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    ing:{
        marginRight:20,
    }
})