import MealItem from './MealItem';
import styles from '../delivery.module.scss';
import Card from './ui/Card';


const DUMMY_MEALS = [
    {
      id: "m1",
      name: 'Ролл "Наоми"',
      description: "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
      price: 11.99,
    },
    {
      id: "m2",
      name: "Спайс в лососе",
      description: "Рис, лосось, соус спайс",
      price: 3.99,
    },
    {
      id: "m3",
      name: "Суши с угрем",
      description: "Угорь копченый, соус унаги, кунжут",
      price: 4.99,
    },
    {
      id: "m4",
      name: 'Салат "Поке с лососем"',
      description: "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
      price: 7.99,
    },
  ];


const MealsList = () =>{

    const mealList = DUMMY_MEALS.map((item) => (
    <MealItem 
      key={item.id} 
      name={item.name} 
      description={item.description} 
      price={item.price}
      id={item.id}
     />
     ));

    return <section className={styles.meals__list}>
        <Card>{mealList}</Card>
    </section>
}

export default MealsList;