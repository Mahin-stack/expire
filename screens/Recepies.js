import React,{Component} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, StatusBar } from 'react-native';
import MyHeader from '../components/MyHeader';


const DATA = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    img: 'https://www.kindpng.com/picc/m/56-568292_pancake-png-pancakes-png-transparent-png.png',
    desc: `A pancake or hotcake is a flat cake, often thin and round, prepared from a starch-based batter. `,
  },
  {
    id: 2,
    title: 'Dhokla',
    img: 'https://pandareviewz.com/wp-content/uploads/2019/03/dhokla-snack.png',
    desc: 'Dhoklas prepared in Gujarati households has at least three fresh vegetable dishes, one '
  },
  {
    id: 3,
    title: 'Godzilla Milkshake',
    img: "https://www.kindpng.com/picc/m/126-1267431_download-milkshake-png-clipart-milk-shake-images-png.png",
    desc:'A milkshake is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners such ',
  },
  {
    id: 4,
    title: 'Coffee',
    img: 'https://www.pngkey.com/png/full/51-518248_fresh-coffee-png-2-png-image-cup-of.png',
    desc: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries Coffea species.',
  },
  {
    id: 5,
    title: 'Puran Poli',
    img: 'http://2.bp.blogspot.com/-cQ0YMNwq04A/VPGDOdtpp2I/AAAAAAAACIQ/SVwLYXS2y2w/s280/Puran%2BPoli.jpg',
    desc: 'Puran Poli is eaten with a variant of Amti known as Katachi Amti is prepared with the remaining.'
  },
  {
    id: 6,
    title: 'Oreo Dream',
    img: 'https://www.nicepng.com/png/detail/111-1115877_oreo-shake-oreo-mint-shake.png',
    desc:'A milkshake is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners .',
  },
  {
    id: 7,
    title: 'Poori-Bhaji',
    img: 'https://im.whatshot.in/img/2018/Nov/kota-kachori-cropped-1543302479.jpg',
    desc:'Puri bhaji is a dish, originating from the Indian subcontinent, of puri and aloo bhaj.',
  },
  {
    id: 8,
    title: 'American Classic',
    img: 'https://www.nicepng.com/png/detail/26-269352_png-library-download-burger-png-images-all-image.png',
    desc: ` A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, `,
  },

  {
    id: 9,
    title: 'Pizza',
    img: 'https://www.kindpng.com/picc/m/194-1941478_large-pizza-png-transparent-png.png',
    desc: `Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination.`,
  },
  {
    id: 10,
    title: 'Dosas',
    img: 'https://www.kindpng.com/picc/m/333-3336187_dosa-hd-images-free-download-hd-png-download.png',
    desc: ` A dosa is a thin pancake or crepe, originating from South India, made from a fermented batter predominantly.`,
  },
  {
    id: 11,
    title: 'Idli',
    img: 'https://www.foodsbyte.in/wp-content/uploads/2020/12/idli.png',
    desc: `Idli are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in South.`,
  },
  {
    id: 12,
    title: 'Pav-Bhaji',
    img: 'https://zaykarecipes.com/wp-content/uploads/2017/02/Pav-Bhaji-Recipe.jpg',
    desc:' Pav bhaji is a popular Indian street food that consists of a spicy mix vegetable mash & soft buns. Usually pav bhaji .',
  },
  {
    id: 13,
    title: 'Dal-Bati',
    img: 'https://thumbs.dreamstime.com/b/rajasthani-traditional-cuisine-dal-baati-rajasthani-traditional-cuisine-dal-baati-also-know-as-dal-bati-daal-baati-churma-194150881.jpg',
    desc: 'Dal Baati is a popular Rajasthani dish consisting of mainly Uradh Dal (combination of five lentils) and Baati i.e. small',
    },
    {
      id: 14,
      title: 'Sabudana-Vada',
      img: 'https://img-global.cpcdn.com/recipes/4b05ae547ba60587/751x532cq70/sabudana-khichdi-recipe-main-photo.jpg',
      desc: 'Sabudana vada is a popular crisp fried snack made with tapioca pearls, roasted peanuts, boiled potatoes and herbs.',
    },
    {
      id: 15,
      title: 'Paneer Butter Masala',
      img: 'https://images.zaiqathespicestore.com/uploads/2016/09/butterpaneer.png',
      desc: 'paneer butter masala is one of the most popular paneer recipes in Indian cuisine. The near perfect combination of spiciness.',
    },
];

class Recepies extends Component {
  render() {
    const renderItem = ({ item }) => (
      <View style={styles.viewContainer}>
         <Image source = {{uri : item.img}} style={styles.img}/>
         <View style={styles.textContainer}>
         <Text style={styles.title}>{item.title}</Text>
         <Text style={styles.subTitle}>{item.desc}</Text>
         </View>
       </View>
    );
  
    return (
         <View style={{flex: 1}}>
         <MyHeader navigation={this.props.navigation} title="Recepies"/>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  subTitle:{
    fontSize: 11
  },
  viewContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 18,
    marginBottom: 20 ,
    borderRadius : 16,
    backgroundColor : "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height : 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
   },
   img:{
    width: 125, 
    height: 150, 
    marginRight : 10,
    backgroundColor: "#fff"
   },
   textContainer: {
    flex: 1, 
    justifyContent : "center",
    marginLeft : 5
   },
});

export default Recepies;