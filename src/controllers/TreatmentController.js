const Treatment = require('../models/Treatment.info')


const createTreatment = async (req, res) => {
    try {
        let treatment = new Treatment(req.body);
        await treatment.save();
        res.send(treatment);
        console.log('Tratamiento creado con exito')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const getAllTreatment = async (req, res) => {
    try {
        const treatments = await Treatment.find({isActive: true}).populate('patientID').populate('patientMIID');
        res.json(treatments);
        console.log('Tratamientos obtenidos con exito')
        /* console.log(treatments) */

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const getAntecedents = async (req, res) => {
    try {
        const treatments = await Treatment.find({patientID: req.params.id, isActive: false}).populate('patientMIID');
        res.json(treatments);
        console.log('Antecedentes obtenidos con exito')
        /* console.log(treatments) */

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

const getTreatment = async (req, res) => {
    try {
        let treatment = await Treatment.findById(req.params.id).populate('patientID').populate('patientMIID');
        /* console.log(treatment); */
        if(!treatment) {
            res.status(404).json({ msg: 'El Tratamiento no existe' })
        }

        let temporalTreatment = JSON.parse(JSON.stringify(treatment));
        temporalTreatment.patientID = treatment.patientID._id
        temporalTreatment.patientMIID = treatment.patientMIID._id

        res.json({
            'treatment': temporalTreatment,
            'patient': treatment.patientID,
            'patientMI': treatment.patientMIID
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

const getTreatmentByUser = async (req, res) => {
    try {
        let treatment = await Treatment.findOne({patientID: req.params.id, isActive: true})
        if(!treatment) {
            res.status(404).json({ msg: 'El Tratamiento no existe' })
        }

        res.send(treatment);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

const deleteTreatment = async (req, res) => {

    try {
        let treatment = await Treatment.findOne({patientID: req.params.id, isActive: true});
        console.log(treatment)
        if(!treatment) {
            res.status(404).json({ msg: 'El Tratamiento no existe' })
        }
        treatment.isActive = false;

        treatment = await Treatment.findOneAndUpdate({ _id: treatment._id }, treatment, { new: true} )
        
        res.json(treatment);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

module.exports = {
    createTreatment: createTreatment,
    getAllTreatment: getAllTreatment,
    getTreatmentByUser: getTreatmentByUser,
    getAntecedents: getAntecedents,
    getTreatment: getTreatment,
    deleteTreatment: deleteTreatment,
}