import sensor from 'node-dht-sensor';
const readSensor= () => {
        try { 
                const res = sensor.read(22,2);
                return res
        }
        catch(err){
                return(err);
        };
};
export default readSensor;
