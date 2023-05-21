import { useEffect, useState } from "react";
import DollCard from "../../../Components/DollCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
    const [dolls, setDolls] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-side-shazidkarim.vercel.app/dolls')
            .then(res => res.json())
            .then(data => {
                setDolls(data);
                console.log(data);
            });
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    const dollsByCategory = dolls.reduce((categories, doll) => {
        if (categories[doll.category]) {
            categories[doll.category].push(doll);
        } else {
            categories[doll.category] = [doll];
        }
        return categories;
    }, {});

    return (
        <div className="mt-8 mb-6 p-4 bg-sky-100">
            <div className="text-center">
                <h2 className="text-5xl mb-8">Our category</h2>
            </div>
            <Tabs>
                <TabList className="flex justify-center">
                    {Object.keys(dollsByCategory).map(category => (
                        <Tab
                            key={category}
                            className="px-4 py-2 md:mb-8 bg-blue-500 text-white font-bold rounded-md mr-2 focus:outline-none focus:bg-blue-700"
                            selectedClassName="px-4 py-2 bg-blue-700 text-white font-bold rounded-md mr-2 focus:outline-none"
                        >
                            {category}
                        </Tab>
                    ))}
                </TabList>
                {Object.entries(dollsByCategory).map(([category, dolls]) => (
                    <TabPanel key={category}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-duration="1000">
                            {dolls.map(doll => (
                                <DollCard key={doll.doll_id} doll={doll} />
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default Category;
