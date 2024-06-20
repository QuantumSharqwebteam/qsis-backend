import Career from "../models/careerSchema.js"

// creating a new data
const CreateCareer = async (req,res) => {
    // console.log(req.body);
    // res.send(req.body)

    try {
        const career = await Career.create(req.body) 
        res.status(200).json(career);
    } catch (error) {
       res.status(500).json({message : error.message}) 
    }
}

const FetchCareer =  async (req, res) => {
    try {
        const career = await Career.find({})
        res.status(200).json(career);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

// to get the data from one id

const FetchOnecareer = async (req, res) => {
    try {
        const { id } = req.params;
        const career = await Career.findById(id);
        if (!career) {
            // If career with the given ID is not found, return a 404 status
            return res.status(404).json({ message: "Career not found" });
        }
        res.status(200).json(career);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update a data

const UpdateCareer = async (req, res) => {
    try {
        const { id } = req.params;
        const updateCareerData = req.body;

        // Check if updateCareerData is empty
        if (!updateCareerData || Object.keys(updateCareerData).length === 0) {
            return res.status(400).json({ message: "Update data is empty" });
        }

        // Update the career data in MongoDB
        const updatedCareer = await Career.findByIdAndUpdate(id, updateCareerData, { new: true });

        // Check if career with given id exists
        if (!updatedCareer) {
            return res.status(404).json({ message: "Career not found" });
        }

        // Return the updated career data
        res.status(200).json(updatedCareer);
    } catch (error) {
        // Handle any errors that occur during the update process
        console.error("Error updating career:", error);
        res.status(500).json({ message: "Error updating career" });
    }
};

// deleting a data

const deleteCareer = async (req, res) => {
    try {
        const { id } = req.params;
        
        const career = await Career.findByIdAndDelete(id)

        if(!career) {
            res.status(404).json({message : "Career not found"});
        }
        
        res.status(200).json({message : "Career deleted successfully"});

    } catch (error) {
        res.status(500).json({message : error.message})
    }
};


export {CreateCareer, FetchCareer, FetchOnecareer, UpdateCareer, deleteCareer}