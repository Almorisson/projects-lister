import React from 'react';

// Main Component
const App = () => <PersonList />;

// List Component
const PersonList = () => {
  const listOfPerson = [
    {
      name:"Morisson", job:"Web Developer", img:"25", sex:"men"
    }
    ,
    {
      name:"Morissen", job:"Developer", img:"34", sex:"men"
    }
    ,
    {
      name:"Margaux", job:"Designer", img:"45", sex:"women"
    }
  ]
  
  return (
		<section>
      <Person person={listOfPerson[0]}>
        <p>Hey guys ! I am Morisson and i love React andt all stuff related to JavaScript</p>
      </Person>

			<Person person={listOfPerson[1]}>
        About more information in my project, please contact me.
      </Person>
      
			<Person person={listOfPerson[2]}>
        Hey, i am margaux the designer of Villette makerz.  
      </Person>
		</section>
	);
};

//Person Component
const Person = (props) => {
  const { name, job, img, sex } = props.person;
  const {details} = props;
  const url = `https://randomuser.me/api/portraits/thumb/${sex}/${img}.jpg`;
	return (
		<div className="person">
			<img src={url} alt={"person"} />
			<h4>{name}</h4>
			<h4>{job}</h4>
			<p>{details}</p>
		</div>
	);
};  

export default App;
