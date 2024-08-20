class ScholarService{
    getScholarship(course,branch,income){
        let totalAmount=0;
        if(course==="BTech"){
            if(branch==="Computer Science")
            {
                totalAmount=118535;
            }
            else if(branch==="Information Technology")
            {
                totalAmount=110780;
            }
            else if(branch==="Electronic and Communication")
            {
                totalAmount=105745;
            }
            else if(branch==="Electrical and Electronic")
            {
                totalAmount=90700;
            }
            else if(branch==="Mechanical Engineering")
            {
                totalAmount=107800;
            }
        }
        if(course==="MTech"){
            if(branch==="Computer Science")
            {
                totalAmount=100535;
            }
            else if(branch==="Information Technology")
            {
                totalAmount=99780;
            }
            else if(branch==="Electronic and Communication")
            {
                totalAmount=96745;
            }
            else if(branch==="Electrical and Electronic")
            {
                totalAmount=90000;
            }
            else if(branch==="Mechanical Engineering")
            {
                totalAmount=89800;
            }
        }

        if(income>=700000)
        {
            totalAmount=totalAmount-(totalAmount*0.25);
        }
        else if(income>=500000 && income<700000){
            totalAmount=totalAmount-(totalAmount*0.15);
        }
        else if(income>=350000 && income<500000){
            totalAmount=totalAmount-(totalAmount*0.07);
        }
        return totalAmount;
    }
}

export default new ScholarService();