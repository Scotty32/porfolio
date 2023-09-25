import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconContext } from 'react-icons';
import { MyJobs } from '../renderer/constants';
import { JobPropsType } from './types';

const MyWorks = () => {
    return (
        <section className="pt-24 w-full">
            <span className="block font-bold py-6">
                Some dev work
            </span>
            <IconContext.Provider
                value={
                    {'size': '3vw'}
                }
            >
                <VerticalTabs/>
            </IconContext.Provider>
        </section>
    )
}

export default MyWorks
interface TabPanelProps {
children?: React.ReactNode;
index: number;
value: number;
}

function TabPanel(props: TabPanelProps) {
const { children, value, index, ...other } = props;

return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
    {...other}
    >
    {value === index && (
        <Box sx={{ p: 3 }}>
            {children}
        </Box>
    )}
    </div>
);
}

function a11yProps(index: number) {
return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
};
}
export const JobTabContent: React.FC<JobPropsType> = ({job}) => {
    return (
        <div
            className="p-0 sm:pl-8 sm:py-3 transition-opacity duration-200"
        >
            <h2 className="font-bold text-lg leading-8 md:text-xl md:leading-9 mb-1">
                {job.title}
                <a className="text-primary" href={job.url} target="_blank" rel="noreferrer">
                    @{job.company}
                </a>
            </h2>
            <h3 className="text-light-gray text-base md:text-lg mb-3">{job.time}</h3>
            <main className="text-base md:text-lg leading-9 md:leading-10">
                <ul>
                    {job.tasks?.map((task) => 
                        <li className="flex">
                            <span className="text-2xl mt-1 mr-2">▸</span>
                            <span>{task}</span>
                        </li>
                    )}
                </ul>
            </main>
        </div>
    )
}

export function VerticalTabs() {
const [value, setValue] = React.useState(0);

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
};

return (
    <Box
    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
    >
    <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
    >
        {MyJobs?.map((job, index) => (
            <Tab label={job.company} {...a11yProps(index)} />
        ))}
    </Tabs>
        {MyJobs?.map((job, index) => (
            <TabPanel value={value} index={index}>
                <JobTabContent
                    job={job}
                />
            </TabPanel>
        ))}
</Box>
);
}
