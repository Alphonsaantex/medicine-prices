/* ═══════════════════════════════════════════════════════════════
   KERALA — ALL 14 DISTRICT COORDINATES
═══════════════════════════════════════════════════════════════ */
const CITY_COORDS = {
    "Thiruvananthapuram": { lat: 8.5241, lng: 76.9366 },
    "Kollam": { lat: 8.8932, lng: 76.6141 },
    "Pathanamthitta": { lat: 9.2648, lng: 76.7870 },
    "Alappuzha": { lat: 9.4981, lng: 76.3388 },
    "Kottayam": { lat: 9.5916, lng: 76.5222 },
    "Idukki": { lat: 9.9189, lng: 77.1025 },
    "Ernakulam": { lat: 9.9312, lng: 76.2673 },
    "Thrissur": { lat: 10.5276, lng: 76.2144 },
    "Palakkad": { lat: 10.7867, lng: 76.6548 },
    "Malappuram": { lat: 11.0510, lng: 76.0711 },
    "Kozhikode": { lat: 11.2588, lng: 75.7804 },
    "Wayanad": { lat: 11.6854, lng: 76.1320 },
    "Kannur": { lat: 11.8745, lng: 75.3704 },
    "Kasaragod": { lat: 12.4996, lng: 74.9869 },
};

/* ═══════════════════════════════════════════════════════════════
   DUMMY DATA — Kerala pharmacies: multiple towns per district
═══════════════════════════════════════════════════════════════ */
const MEDICINES_DB = {
    "paracetamol": [
        // Thiruvananthapuram district
        { id: 1, name: "Apollo Pharmacy", town: "Kesavadasapuram", city: "Thiruvananthapuram", state: "Kerala", price: 11, lat: 8.508, lng: 76.958, available: true },
        { id: 2, name: "Jan Aushadhi Kendra", town: "Vanchiyoor", city: "Thiruvananthapuram", state: "Kerala", price: 7, lat: 8.502, lng: 76.955, available: true },
        { id: 3, name: "Aster Pharmacy", town: "Pattom", city: "Thiruvananthapuram", state: "Kerala", price: 12, lat: 8.538, lng: 76.928, available: true },
        // Kollam district
        { id: 4, name: "MedPlus", town: "Chinnakada", city: "Kollam", state: "Kerala", price: 9, lat: 8.888, lng: 76.595, available: true },
        { id: 5, name: "Mediline Pharmacy", town: "Kottiyam", city: "Kollam", state: "Kerala", price: 12, lat: 8.968, lng: 76.597, available: true },
        { id: 6, name: "Jan Aushadhi Kendra", town: "Chavara", city: "Kollam", state: "Kerala", price: 7, lat: 8.980, lng: 76.552, available: true },
        // Pathanamthitta district
        { id: 7, name: "Jan Aushadhi Kendra", town: "Thiruvalla", city: "Pathanamthitta", state: "Kerala", price: 7, lat: 9.382, lng: 76.574, available: true },
        { id: 8, name: "Sree Pharmacy", town: "Adoor", city: "Pathanamthitta", state: "Kerala", price: 11, lat: 9.150, lng: 76.740, available: true },
        { id: 9, name: "PharmEasy Point", town: "Ranni", city: "Pathanamthitta", state: "Kerala", price: 13, lat: 9.380, lng: 76.780, available: false },
        // Alappuzha district
        { id: 10, name: "Apollo Pharmacy", town: "Cherthala", city: "Alappuzha", state: "Kerala", price: 12, lat: 9.685, lng: 76.332, available: true },
        { id: 11, name: "MedPlus", town: "Kayamkulam", city: "Alappuzha", state: "Kerala", price: 10, lat: 9.172, lng: 76.499, available: true },
        { id: 12, name: "Wellness Forever", town: "Haripad", city: "Alappuzha", state: "Kerala", price: 9, lat: 9.232, lng: 76.477, available: true },
        // Kottayam district
        { id: 13, name: "Health & Glow", town: "Changanacherry", city: "Kottayam", state: "Kerala", price: 11, lat: 9.441, lng: 76.536, available: true },
        { id: 14, name: "Aster Pharmacy", town: "Ettumanoor", city: "Kottayam", state: "Kerala", price: 10, lat: 9.652, lng: 76.559, available: true },
        { id: 15, name: "Kerala Medical Hall", town: "Pala", city: "Kottayam", state: "Kerala", price: 14, lat: 9.704, lng: 76.688, available: false },
        // Idukki district
        { id: 16, name: "Green Valley Pharmacy", town: "Thodupuzha", city: "Idukki", state: "Kerala", price: 12, lat: 9.893, lng: 76.716, available: true },
        { id: 17, name: "Jan Aushadhi Kendra", town: "Kattappana", city: "Idukki", state: "Kerala", price: 8, lat: 9.747, lng: 77.115, available: true },
        { id: 18, name: "Sree Pharmacy", town: "Munnar", city: "Idukki", state: "Kerala", price: 15, lat: 10.089, lng: 77.060, available: true },
        // Ernakulam district
        { id: 19, name: "Apollo Pharmacy", town: "Kakkanad", city: "Ernakulam", state: "Kerala", price: 13, lat: 10.019, lng: 76.356, available: true },
        { id: 20, name: "Aster Pharmacy", town: "Aluva", city: "Ernakulam", state: "Kerala", price: 11, lat: 10.099, lng: 76.357, available: true },
        { id: 21, name: "MedPlus", town: "Perumbavoor", city: "Ernakulam", state: "Kerala", price: 10, lat: 10.107, lng: 76.467, available: true },
        // Thrissur district
        { id: 22, name: "Mediline Pharmacy", town: "Chalakudy", city: "Thrissur", state: "Kerala", price: 9, lat: 10.302, lng: 76.332, available: true },
        { id: 23, name: "Jan Aushadhi Kendra", town: "Irinjalakuda", city: "Thrissur", state: "Kerala", price: 7, lat: 10.351, lng: 76.214, available: true },
        { id: 24, name: "Apollo Pharmacy", town: "Kunnamkulam", city: "Thrissur", state: "Kerala", price: 12, lat: 10.652, lng: 76.073, available: true },
        // Palakkad district
        { id: 25, name: "Kerala Medical Hall", town: "Ottapalam", city: "Palakkad", state: "Kerala", price: 11, lat: 10.770, lng: 76.379, available: true },
        { id: 26, name: "MedPlus", town: "Shoranur", city: "Palakkad", state: "Kerala", price: 10, lat: 10.764, lng: 76.270, available: true },
        { id: 27, name: "Jan Aushadhi Kendra", town: "Mannarkkad", city: "Palakkad", state: "Kerala", price: 8, lat: 10.989, lng: 76.461, available: false },
        // Malappuram district
        { id: 28, name: "PharmEasy Point", town: "Manjeri", city: "Malappuram", state: "Kerala", price: 10, lat: 11.119, lng: 76.120, available: true },
        { id: 29, name: "Jan Aushadhi Kendra", town: "Tirur", city: "Malappuram", state: "Kerala", price: 7, lat: 10.912, lng: 75.921, available: true },
        { id: 30, name: "Malabar Pharmacy", town: "Perinthalmanna", city: "Malappuram", state: "Kerala", price: 11, lat: 10.975, lng: 76.227, available: true },
        // Kozhikode district
        { id: 31, name: "Kerala Medical Hall", town: "Vadakara", city: "Kozhikode", state: "Kerala", price: 11, lat: 11.594, lng: 75.590, available: true },
        { id: 32, name: "Zamorins Medical Hall", town: "Koyilandy", city: "Kozhikode", state: "Kerala", price: 12, lat: 11.446, lng: 75.658, available: true },
        { id: 33, name: "Apollo Pharmacy", town: "Feroke", city: "Kozhikode", state: "Kerala", price: 10, lat: 11.174, lng: 75.845, available: true },
        // Wayanad district
        { id: 34, name: "Green Valley Pharmacy", town: "Kalpetta", city: "Wayanad", state: "Kerala", price: 13, lat: 11.608, lng: 76.083, available: true },
        { id: 35, name: "Jan Aushadhi Kendra", town: "Sulthan Bathery", city: "Wayanad", state: "Kerala", price: 8, lat: 11.668, lng: 76.263, available: true },
        { id: 36, name: "Sree Pharmacy", town: "Mananthavady", city: "Wayanad", state: "Kerala", price: 14, lat: 11.799, lng: 76.002, available: false },
        // Kannur district
        { id: 37, name: "Netmeds Local", town: "Thalassery", city: "Kannur", state: "Kerala", price: 11, lat: 11.753, lng: 75.492, available: true },
        { id: 38, name: "Malabar Pharmacy", town: "Payyannur", city: "Kannur", state: "Kerala", price: 9, lat: 12.100, lng: 75.207, available: true },
        { id: 39, name: "Jan Aushadhi Kendra", town: "Iritty", city: "Kannur", state: "Kerala", price: 7, lat: 12.057, lng: 75.528, available: true },
        // Kasaragod district
        { id: 40, name: "Border Medicals", town: "Kanhangad", city: "Kasaragod", state: "Kerala", price: 13, lat: 12.328, lng: 74.945, available: true },
        { id: 41, name: "Jan Aushadhi Kendra", town: "Nileshwaram", city: "Kasaragod", state: "Kerala", price: 8, lat: 12.255, lng: 75.130, available: true },
        { id: 42, name: "Nilgiris Medical Store", town: "Hosdurg", city: "Kasaragod", state: "Kerala", price: 11, lat: 12.423, lng: 74.978, available: true },
    ],
    "ibuprofen": [
        { id: 43, name: "Aster Pharmacy", town: "Pattom", city: "Thiruvananthapuram", state: "Kerala", price: 30, lat: 8.538, lng: 76.928, available: true },
        { id: 44, name: "Jan Aushadhi Kendra", town: "Vanchiyoor", city: "Thiruvananthapuram", state: "Kerala", price: 22, lat: 8.502, lng: 76.955, available: true },
        { id: 45, name: "PharmEasy Point", town: "Chinnakada", city: "Kollam", state: "Kerala", price: 24, lat: 8.888, lng: 76.595, available: true },
        { id: 46, name: "Jan Aushadhi Kendra", town: "Thiruvalla", city: "Pathanamthitta", state: "Kerala", price: 19, lat: 9.382, lng: 76.574, available: true },
        { id: 47, name: "Wellness Forever", town: "Cherthala", city: "Alappuzha", state: "Kerala", price: 25, lat: 9.685, lng: 76.332, available: true },
        { id: 48, name: "Health & Glow", town: "Changanacherry", city: "Kottayam", state: "Kerala", price: 28, lat: 9.441, lng: 76.536, available: false },
        { id: 49, name: "Green Valley Pharmacy", town: "Thodupuzha", city: "Idukki", state: "Kerala", price: 26, lat: 9.893, lng: 76.716, available: true },
        { id: 50, name: "Apollo Pharmacy", town: "Aluva", city: "Ernakulam", state: "Kerala", price: 26, lat: 10.099, lng: 76.357, available: true },
        { id: 51, name: "Jan Aushadhi Kendra", town: "Irinjalakuda", city: "Thrissur", state: "Kerala", price: 20, lat: 10.351, lng: 76.214, available: true },
        { id: 52, name: "Kerala Medical Hall", town: "Ottapalam", city: "Palakkad", state: "Kerala", price: 22, lat: 10.770, lng: 76.379, available: true },
        { id: 53, name: "Malabar Pharmacy", town: "Manjeri", city: "Malappuram", state: "Kerala", price: 23, lat: 11.119, lng: 76.120, available: true },
        { id: 54, name: "Zamorins Medical Hall", town: "Vadakara", city: "Kozhikode", state: "Kerala", price: 28, lat: 11.594, lng: 75.590, available: true },
        { id: 55, name: "Jan Aushadhi Kendra", town: "Sulthan Bathery", city: "Wayanad", state: "Kerala", price: 18, lat: 11.668, lng: 76.263, available: true },
        { id: 56, name: "Netmeds Local", town: "Thalassery", city: "Kannur", state: "Kerala", price: 27, lat: 11.753, lng: 75.492, available: true },
        { id: 57, name: "Border Medicals", town: "Kanhangad", city: "Kasaragod", state: "Kerala", price: 25, lat: 12.328, lng: 74.945, available: false },
    ],
    "amoxicillin": [
        { id: 58, name: "Jan Aushadhi Kendra", town: "Vanchiyoor", city: "Thiruvananthapuram", state: "Kerala", price: 55, lat: 8.502, lng: 76.955, available: true },
        { id: 59, name: "Apollo Pharmacy", town: "Kesavadasapuram", city: "Thiruvananthapuram", state: "Kerala", price: 88, lat: 8.508, lng: 76.958, available: true },
        { id: 60, name: "Mediline Pharmacy", town: "Chinnakada", city: "Kollam", state: "Kerala", price: 65, lat: 8.888, lng: 76.595, available: true },
        { id: 61, name: "Jan Aushadhi Kendra", town: "Thiruvalla", city: "Pathanamthitta", state: "Kerala", price: 52, lat: 9.382, lng: 76.574, available: true },
        { id: 62, name: "MedPlus", town: "Kayamkulam", city: "Alappuzha", state: "Kerala", price: 72, lat: 9.172, lng: 76.499, available: false },
        { id: 63, name: "Health & Glow", town: "Changanacherry", city: "Kottayam", state: "Kerala", price: 78, lat: 9.441, lng: 76.536, available: true },
        { id: 64, name: "Sree Pharmacy", town: "Kattappana", city: "Idukki", state: "Kerala", price: 60, lat: 9.747, lng: 77.115, available: true },
        { id: 65, name: "Aster Pharmacy", town: "Kakkanad", city: "Ernakulam", state: "Kerala", price: 85, lat: 10.019, lng: 76.356, available: true },
        { id: 66, name: "Jan Aushadhi Kendra", town: "Chalakudy", city: "Thrissur", state: "Kerala", price: 50, lat: 10.302, lng: 76.332, available: true },
        { id: 67, name: "Kerala Medical Hall", town: "Shoranur", city: "Palakkad", state: "Kerala", price: 70, lat: 10.764, lng: 76.270, available: true },
        { id: 68, name: "Jan Aushadhi Kendra", town: "Tirur", city: "Malappuram", state: "Kerala", price: 48, lat: 10.912, lng: 75.921, available: true },
        { id: 69, name: "Apollo Pharmacy", town: "Feroke", city: "Kozhikode", state: "Kerala", price: 80, lat: 11.174, lng: 75.845, available: false },
        { id: 70, name: "Jan Aushadhi Kendra", town: "Kalpetta", city: "Wayanad", state: "Kerala", price: 55, lat: 11.608, lng: 76.083, available: true },
        { id: 71, name: "PharmEasy Point", town: "Payyannur", city: "Kannur", state: "Kerala", price: 70, lat: 12.100, lng: 75.207, available: true },
        { id: 72, name: "Jan Aushadhi Kendra", town: "Nileshwaram", city: "Kasaragod", state: "Kerala", price: 50, lat: 12.255, lng: 75.130, available: true },
    ],
    "azithromycin": [
        { id: 73, name: "Aster Pharmacy", town: "Pattom", city: "Thiruvananthapuram", state: "Kerala", price: 105, lat: 8.538, lng: 76.928, available: true },
        { id: 74, name: "Jan Aushadhi Kendra", town: "Chinnakada", city: "Kollam", state: "Kerala", price: 72, lat: 8.888, lng: 76.595, available: true },
        { id: 75, name: "MedPlus", town: "Thiruvalla", city: "Pathanamthitta", state: "Kerala", price: 90, lat: 9.382, lng: 76.574, available: true },
        { id: 76, name: "Apollo Pharmacy", town: "Cherthala", city: "Alappuzha", state: "Kerala", price: 108, lat: 9.685, lng: 76.332, available: false },
        { id: 77, name: "Kerala Medical Hall", town: "Changanacherry", city: "Kottayam", state: "Kerala", price: 92, lat: 9.441, lng: 76.536, available: true },
        { id: 78, name: "Jan Aushadhi Kendra", town: "Thodupuzha", city: "Idukki", state: "Kerala", price: 68, lat: 9.893, lng: 76.716, available: true },
        { id: 79, name: "Apollo Pharmacy", town: "Aluva", city: "Ernakulam", state: "Kerala", price: 110, lat: 10.099, lng: 76.357, available: true },
        { id: 80, name: "Jan Aushadhi Kendra", town: "Irinjalakuda", city: "Thrissur", state: "Kerala", price: 70, lat: 10.351, lng: 76.214, available: true },
        { id: 81, name: "Mediline Pharmacy", town: "Ottapalam", city: "Palakkad", state: "Kerala", price: 88, lat: 10.770, lng: 76.379, available: true },
        { id: 82, name: "Malabar Pharmacy", town: "Manjeri", city: "Malappuram", state: "Kerala", price: 85, lat: 11.119, lng: 76.120, available: true },
        { id: 83, name: "Zamorins Medical Hall", town: "Koyilandy", city: "Kozhikode", state: "Kerala", price: 95, lat: 11.446, lng: 75.658, available: false },
        { id: 84, name: "Green Valley Pharmacy", town: "Kalpetta", city: "Wayanad", state: "Kerala", price: 100, lat: 11.608, lng: 76.083, available: true },
        { id: 85, name: "Netmeds Local", town: "Thalassery", city: "Kannur", state: "Kerala", price: 85, lat: 11.753, lng: 75.492, available: true },
        { id: 86, name: "Border Medicals", town: "Kanhangad", city: "Kasaragod", state: "Kerala", price: 78, lat: 12.328, lng: 74.945, available: true },
    ],
    "metformin": [
        { id: 87, name: "Jan Aushadhi Kendra", town: "Vanchiyoor", city: "Thiruvananthapuram", state: "Kerala", price: 12, lat: 8.502, lng: 76.955, available: true },
        { id: 88, name: "Apollo Pharmacy", town: "Pattom", city: "Thiruvananthapuram", state: "Kerala", price: 20, lat: 8.538, lng: 76.928, available: true },
        { id: 89, name: "MedPlus", town: "Kottiyam", city: "Kollam", state: "Kerala", price: 22, lat: 8.968, lng: 76.597, available: true },
        { id: 90, name: "Sree Pharmacy", town: "Adoor", city: "Pathanamthitta", state: "Kerala", price: 18, lat: 9.150, lng: 76.740, available: true },
        { id: 91, name: "Wellness Forever", town: "Kayamkulam", city: "Alappuzha", state: "Kerala", price: 17, lat: 9.172, lng: 76.499, available: true },
        { id: 92, name: "Health & Glow", town: "Ettumanoor", city: "Kottayam", state: "Kerala", price: 19, lat: 9.652, lng: 76.559, available: false },
        { id: 93, name: "Jan Aushadhi Kendra", town: "Kattappana", city: "Idukki", state: "Kerala", price: 12, lat: 9.747, lng: 77.115, available: true },
        { id: 94, name: "Aster Pharmacy", town: "Perumbavoor", city: "Ernakulam", state: "Kerala", price: 20, lat: 10.107, lng: 76.467, available: true },
        { id: 95, name: "Jan Aushadhi Kendra", town: "Kunnamkulam", city: "Thrissur", state: "Kerala", price: 11, lat: 10.652, lng: 76.073, available: true },
        { id: 96, name: "Kerala Medical Hall", town: "Shoranur", city: "Palakkad", state: "Kerala", price: 15, lat: 10.764, lng: 76.270, available: true },
        { id: 97, name: "Jan Aushadhi Kendra", town: "Perinthalmanna", city: "Malappuram", state: "Kerala", price: 11, lat: 10.975, lng: 76.227, available: true },
        { id: 98, name: "Apollo Pharmacy", town: "Feroke", city: "Kozhikode", state: "Kerala", price: 18, lat: 11.174, lng: 75.845, available: false },
        { id: 99, name: "Jan Aushadhi Kendra", town: "Mananthavady", city: "Wayanad", state: "Kerala", price: 12, lat: 11.799, lng: 76.002, available: true },
        { id: 100, name: "Mediline Pharmacy", town: "Iritty", city: "Kannur", state: "Kerala", price: 17, lat: 12.057, lng: 75.528, available: true },
        { id: 101, name: "Jan Aushadhi Kendra", town: "Hosdurg", city: "Kasaragod", state: "Kerala", price: 11, lat: 12.423, lng: 74.978, available: true },
    ],
    "cetirizine": [
        { id: 102, name: "Aster Pharmacy", town: "Kesavadasapuram", city: "Thiruvananthapuram", state: "Kerala", price: 16, lat: 8.508, lng: 76.958, available: true },
        { id: 103, name: "Jan Aushadhi Kendra", town: "Chavara", city: "Kollam", state: "Kerala", price: 8, lat: 8.980, lng: 76.552, available: true },
        { id: 104, name: "PharmEasy Point", town: "Ranni", city: "Pathanamthitta", state: "Kerala", price: 13, lat: 9.380, lng: 76.780, available: true },
        { id: 105, name: "MedPlus", town: "Haripad", city: "Alappuzha", state: "Kerala", price: 10, lat: 9.232, lng: 76.477, available: true },
        { id: 106, name: "Kerala Medical Hall", town: "Pala", city: "Kottayam", state: "Kerala", price: 12, lat: 9.704, lng: 76.688, available: false },
        { id: 107, name: "Sree Pharmacy", town: "Munnar", city: "Idukki", state: "Kerala", price: 15, lat: 10.089, lng: 77.060, available: true },
        { id: 108, name: "Jan Aushadhi Kendra", town: "Kakkanad", city: "Ernakulam", state: "Kerala", price: 9, lat: 10.019, lng: 76.356, available: true },
        { id: 109, name: "Apollo Pharmacy", town: "Chalakudy", city: "Thrissur", state: "Kerala", price: 17, lat: 10.302, lng: 76.332, available: true },
        { id: 110, name: "PharmEasy Point", town: "Mannarkkad", city: "Palakkad", state: "Kerala", price: 11, lat: 10.989, lng: 76.461, available: true },
        { id: 111, name: "Malabar Pharmacy", town: "Tirur", city: "Malappuram", state: "Kerala", price: 10, lat: 10.912, lng: 75.921, available: true },
        { id: 112, name: "Zamorins Medical Hall", town: "Vadakara", city: "Kozhikode", state: "Kerala", price: 11, lat: 11.594, lng: 75.590, available: true },
        { id: 113, name: "Green Valley Pharmacy", town: "Sulthan Bathery", city: "Wayanad", state: "Kerala", price: 13, lat: 11.668, lng: 76.263, available: false },
        { id: 114, name: "Netmeds Local", town: "Payyannur", city: "Kannur", state: "Kerala", price: 9, lat: 12.100, lng: 75.207, available: true },
        { id: 115, name: "Nilgiris Medical Store", town: "Nileshwaram", city: "Kasaragod", state: "Kerala", price: 10, lat: 12.255, lng: 75.130, available: true },
    ],
    "levocetirizine": [
        { id: 116, name: "Jan Aushadhi Kendra", town: "Vanchiyoor", city: "Thiruvananthapuram", state: "Kerala", price: 10, lat: 8.502, lng: 76.955, available: true },
        { id: 117, name: "MedPlus", town: "Kottiyam", city: "Kollam", state: "Kerala", price: 15, lat: 8.968, lng: 76.597, available: true },
        { id: 118, name: "Apollo Pharmacy", town: "Aluva", city: "Ernakulam", state: "Kerala", price: 18, lat: 10.099, lng: 76.357, available: true },
        { id: 119, name: "Jan Aushadhi Kendra", town: "Irinjalakuda", city: "Thrissur", state: "Kerala", price: 12, lat: 10.351, lng: 76.214, available: true },
        { id: 120, name: "Kerala Medical Hall", town: "Vadakara", city: "Kozhikode", state: "Kerala", price: 16, lat: 11.594, lng: 75.590, available: true },
        { id: 121, name: "Netmeds Local", town: "Thalassery", city: "Kannur", state: "Kerala", price: 12, lat: 11.753, lng: 75.492, available: false },
    ],
    "ambroxol": [
        { id: 122, name: "Aster Pharmacy", town: "Pattom", city: "Thiruvananthapuram", state: "Kerala", price: 22, lat: 8.538, lng: 76.928, available: true },
        { id: 123, name: "Jan Aushadhi Kendra", town: "Thiruvalla", city: "Pathanamthitta", state: "Kerala", price: 14, lat: 9.382, lng: 76.574, available: true },
        { id: 124, name: "Apollo Pharmacy", town: "Perumbavoor", city: "Ernakulam", state: "Kerala", price: 20, lat: 10.107, lng: 76.467, available: true },
        { id: 125, name: "Jan Aushadhi Kendra", town: "Kunnamkulam", city: "Thrissur", state: "Kerala", price: 14, lat: 10.652, lng: 76.073, available: true },
        { id: 126, name: "Malabar Pharmacy", town: "Manjeri", city: "Malappuram", state: "Kerala", price: 18, lat: 11.119, lng: 76.120, available: true },
        { id: 127, name: "PharmEasy Point", town: "Kanhangad", city: "Kasaragod", state: "Kerala", price: 16, lat: 12.328, lng: 74.945, available: false },
    ],
    "spinraza": [
        { id: 128, name: "Aster Pharmacy", town: "Kesavadasapuram", city: "Thiruvananthapuram", state: "Kerala", price: 15, lat: 8.508, lng: 76.958, available: true },
        { id: 129, name: "Apollo Pharmacy", town: "Kakkanad", city: "Ernakulam", state: "Kerala", price: 18, lat: 10.019, lng: 76.356, available: true },
        { id: 130, name: "Jan Aushadhi Kendra", town: "Feroke", city: "Kozhikode", state: "Kerala", price: 10, lat: 11.174, lng: 75.845, available: true },
        { id: 131, name: "Kerala Medical Hall", town: "Thalassery", city: "Kannur", state: "Kerala", price: 14, lat: 11.753, lng: 75.492, available: true },
        { id: 132, name: "Jan Aushadhi Kendra", town: "Ottapalam", city: "Palakkad", state: "Kerala", price: 11, lat: 10.770, lng: 76.379, available: false },
        { id: 133, name: "PharmEasy Point", town: "Kalpetta", city: "Wayanad", state: "Kerala", price: 13, lat: 11.608, lng: 76.083, available: true },
    ],
    "zolgensma": [
        { id: 134, name: "Aster Pharmacy", town: "Pattom", city: "Thiruvananthapuram", state: "Kerala", price: 15, lat: 8.538, lng: 76.928, available: true },
        { id: 135, name: "Apollo Pharmacy", town: "Aluva", city: "Ernakulam", state: "Kerala", price: 18, lat: 10.099, lng: 76.357, available: true },
        { id: 136, name: "Jan Aushadhi Kendra", town: "Irinjalakuda", city: "Thrissur", state: "Kerala", price: 10, lat: 10.351, lng: 76.214, available: true },
        { id: 137, name: "Kerala Medical Hall", town: "Koyilandy", city: "Kozhikode", state: "Kerala", price: 14, lat: 11.446, lng: 75.658, available: true },
        { id: 138, name: "PharmEasy Point", town: "Payyannur", city: "Kannur", state: "Kerala", price: 12, lat: 12.100, lng: 75.207, available: false },
        { id: 139, name: "Nilgiris Medical Store", town: "Hosdurg", city: "Kasaragod", state: "Kerala", price: 11, lat: 12.423, lng: 74.978, available: true },
    ],
};

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */
let userLat = null;
let userLng = null;
let locationName = null;

/* ═══════════════════════════════════════════════════════════════
   LOCATION PICKER MODAL
═══════════════════════════════════════════════════════════════ */
function openLocationPicker() {
    buildCityGrid(Object.keys(CITY_COORDS));
    syncModalCurrentDisplay();
    document.getElementById('location-modal-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('city-search-input').value = '';
    setTimeout(() => document.getElementById('city-search-input').focus(), 100);
}

function closeLocationPicker(event) {
    if (event && event.target !== document.getElementById('location-modal-overlay')) return;
    _dismissModal();
}

function _dismissModal() {
    document.getElementById('location-modal-overlay').classList.add('hidden');
    document.body.style.overflow = '';
}

function syncModalCurrentDisplay() {
    document.getElementById('modal-current-value').textContent = locationName || 'Not set';
}

/* ─── Build city grid ─────────────────────────────────────────── */
function buildCityGrid(districts) {
    const grid = document.getElementById('city-grid');
    grid.innerHTML = districts.map(d => {
        const isActive = (locationName === d);
        return `<button class="city-btn ${isActive ? 'active' : ''}" onclick="selectCity('${d}')">
            <span class="city-btn-icon">${districtEmoji(d)}</span>
            <span class="city-btn-name">${d}</span>
            ${isActive ? '<span class="city-check">✓</span>' : ''}
        </button>`;
    }).join('');

    if (districts.length === 0) {
        grid.innerHTML = '<div style="color:var(--clr-muted);font-size:13px;padding:16px 0;text-align:center">No districts found</div>';
    }
}

function districtEmoji(d) {
    const map = {
        "Thiruvananthapuram": "🏛️",
        "Kollam": "⚓",
        "Pathanamthitta": "⛪",
        "Alappuzha": "🛶",
        "Kottayam": "📚",
        "Idukki": "🌄",
        "Ernakulam": "🌆",
        "Thrissur": "🎭",
        "Palakkad": "🏰",
        "Malappuram": "🕌",
        "Kozhikode": "🌊",
        "Wayanad": "🌿",
        "Kannur": "🧵",
        "Kasaragod": "🏖️",
    };
    return map[d] || '📍';
}

function filterCities() {
    const q = document.getElementById('city-search-input').value.toLowerCase().trim();
    const filtered = Object.keys(CITY_COORDS).filter(d => d.toLowerCase().includes(q));
    buildCityGrid(filtered);
}

/* ─── Select a district ───────────────────────────────────────── */
function selectCity(district) {
    const coords = CITY_COORDS[district];
    userLat = coords.lat;
    userLng = coords.lng;
    locationName = district;
    updateLocationUI();
    _dismissModal();
    const query = document.getElementById('medicine-input').value.trim().toLowerCase();
    if (query && !document.getElementById('results').classList.contains('hidden')) {
        renderNearest(query);
    }
}

/* ─── Use GPS ─────────────────────────────────────────────────── */
function useGPSLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser.');
        return;
    }
    const btn = document.getElementById('btn-gps');
    const arrow = document.getElementById('gps-arrow');
    btn.disabled = true;
    arrow.textContent = '⏳';

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            userLat = pos.coords.latitude;
            userLng = pos.coords.longitude;
            locationName = 'GPS Location';
            updateLocationUI();
            btn.disabled = false;
            arrow.textContent = '✓';
            setTimeout(() => { arrow.textContent = '→'; }, 1500);
            _dismissModal();
            const query = document.getElementById('medicine-input').value.trim().toLowerCase();
            if (query && !document.getElementById('results').classList.contains('hidden')) {
                renderNearest(query);
            }
        },
        () => {
            btn.disabled = false;
            arrow.textContent = '✕';
            setTimeout(() => { arrow.textContent = '→'; }, 2000);
            alert('Location permission denied. Please pick a district manually.');
        }
    );
}

/* ─── Update UI after location change ────────────────────────── */
function updateLocationUI() {
    document.getElementById('location-btn-label').textContent = locationName || 'Set Location';
    document.getElementById('nearest-subtitle').textContent =
        locationName ? `Sorted by distance from ${locationName}` : 'No location set';
    syncModalCurrentDisplay();
}

/* ═══════════════════════════════════════════════════════════════
   HAVERSINE DISTANCE (km)
═══════════════════════════════════════════════════════════════ */
function haversine(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/* ═══════════════════════════════════════════════════════════════
   SEARCH HANDLER
═══════════════════════════════════════════════════════════════ */
function quickSearch(term) {
    document.getElementById('medicine-input').value = term;
    handleSearch();
}

function handleSearch() {
    const query = document.getElementById('medicine-input').value.trim();
    if (!query) {
        document.getElementById('medicine-input').focus();
        shakeSearchBox();
        return;
    }
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
        performSearch(query.toLowerCase());
    }, 900);
}

function shakeSearchBox() {
    const box = document.getElementById('search-box');
    box.style.animation = 'shake .4s ease';
    box.addEventListener('animationend', () => { box.style.animation = ''; }, { once: true });
}

function performSearch(query) {
    const key = Object.keys(MEDICINES_DB).find(k => k.includes(query) || query.includes(k));
    const shops = key ? MEDICINES_DB[key] : null;

    const resultsEl = document.getElementById('results');
    resultsEl.classList.remove('hidden');
    document.getElementById('query-display').textContent =
        `"${query.charAt(0).toUpperCase() + query.slice(1)}"`;

    if (!shops || shops.length === 0) {
        document.getElementById('results-count').textContent = '0 results';
        document.getElementById('best-pick-grid').innerHTML = noResultsHTML();
        document.getElementById('lowest-grid').innerHTML = noResultsHTML();
        document.getElementById('nearest-grid').innerHTML = noResultsHTML();
        return;
    }

    const available = shops.filter(s => s.available);
    document.getElementById('results-count').textContent = `${available.length} pharmacies found`;

    // Always try auto-GPS silently
    if (!userLat && navigator.geolocation) {
        const locStatus = document.getElementById('location-detect-status');
        if (locStatus) { locStatus.textContent = '🛰️ Detecting your location…'; locStatus.classList.remove('hidden'); }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                userLat = pos.coords.latitude;
                userLng = pos.coords.longitude;
                locationName = 'Your Location';
                updateLocationUI();
                if (locStatus) locStatus.classList.add('hidden');
                renderBestPick(query);
                renderNearest(query);
            },
            () => {
                if (locStatus) { locStatus.textContent = '📍 Enable location for personalised results'; }
            },
            { timeout: 6000 }
        );
    } else {
        renderBestPick(query);
    }

    renderLowest(available);
    renderNearest(query);
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


/* ─── Best Pick: nearest + cheapest combined ─────────────────── */
function renderBestPick(query) {
    const key = Object.keys(MEDICINES_DB).find(k => k.includes(query) || query.includes(k));
    const shops = key ? MEDICINES_DB[key].filter(s => s.available) : [];
    const grid = document.getElementById('best-pick-grid');

    if (!shops.length) { grid.innerHTML = noResultsHTML(); return; }

    let scored;
    if (userLat && userLng) {
        // Attach distances
        const withDist = shops.map(s => ({ ...s, distance: haversine(userLat, userLng, s.lat, s.lng) }));
        const maxDist = Math.max(...withDist.map(s => s.distance)) || 1;
        const maxPrice = Math.max(...withDist.map(s => s.price)) || 1;
        const minDist = Math.min(...withDist.map(s => s.distance)) || 1;
        const minPrice = Math.min(...withDist.map(s => s.price)) || 1;
        // Score = 60% price + 40% distance (both normalised 0-1, lower = better)
        scored = withDist
            .map(s => ({ ...s, score: 0.6 * (s.price - minPrice) / (maxPrice - minPrice + 0.01) + 0.4 * (s.distance - minDist) / (maxDist - minDist + 0.01) }))
            .sort((a, b) => a.score - b.score);
    } else {
        // No location: just sort by price
        scored = [...shops].sort((a, b) => a.price - b.price).map(s => ({ ...s, distance: null }));
    }

    const best = scored[0];
    const dist = best.distance !== null ? `${best.distance.toFixed(1)} km away` : 'Distance unknown';
    const townPart = best.town ? `<span class="best-pick-town">📌 ${escapeHTML(best.town)}</span>` : '';
    grid.innerHTML = `
    <div class="best-pick-card">
      <div class="best-pick-ribbon">⭐ Best Pick Near You</div>
      <div class="best-pick-top">
        <div>
          <div class="best-pick-name">${escapeHTML(best.name)}</div>
          ${townPart}
          <div class="best-pick-district">🏛️ ${escapeHTML(best.city)} &nbsp;|&nbsp; 🌴 Kerala</div>
        </div>
        <div class="best-pick-price">₹${best.price}<span class="price-unit"> / strip</span></div>
      </div>
      <div class="best-pick-meta">
        <div class="best-pick-chip dist-chip">📍 ${dist}</div>
        <div class="best-pick-chip price-chip">🏷️ Cheapest nearby</div>
      </div>
      <div class="best-pick-actions">
        <a class="btn-direction best-pick-dir" href="https://www.google.com/maps/dir/?api=1&destination=${best.lat},${best.lng}" target="_blank" rel="noopener">🗺️ Get Directions</a>
        <div class="best-pick-score-wrap">Match Score <strong>${Math.round((1 - scored[0].score) * 100)}%</strong></div>
      </div>
    </div>`;
}

/* ─── Render Lowest Price ─────────────────────────────────────── */
function renderLowest(shops) {
    const sorted = [...shops].sort((a, b) => a.price - b.price);
    const lowestPrice = sorted[0].price;
    const top3 = sorted.slice(0, 3);
    document.getElementById('lowest-grid').innerHTML = top3.map((shop, i) =>
        lowestCard(shop, shop.price === lowestPrice, i)
    ).join('');
}

function lowestCard(shop, isLowest, idx) {
    return `
    <div class="card ${isLowest ? 'lowest-price' : ''}" style="animation-delay:${idx * .07}s">
      ${isLowest ? '<div class="card-badge">🏆 Best Price</div>' : ''}
      <div class="shop-name">${escapeHTML(shop.name)}</div>
      ${shop.town ? `<div class="shop-town">📌 ${escapeHTML(shop.town)}</div>` : ''}
      <div class="shop-meta">
        <div class="meta-chip">🏛️ <span>${escapeHTML(shop.city)}</span></div>
        <div class="meta-chip">🌴 <span>Kerala</span></div>
      </div>
      <div class="card-footer">
        <div class="price-tag ${isLowest ? 'green' : ''}">₹${shop.price} <span class="price-unit">/ strip</span></div>
        <a class="btn-direction" href="https://www.google.com/maps/dir/?api=1&destination=${shop.lat},${shop.lng}" target="_blank" rel="noopener">🗺️ Get Direction</a>
      </div>
    </div>`;
}

/* ─── Render Nearest ──────────────────────────────────────────── */
function renderNearest(query) {
    const key = Object.keys(MEDICINES_DB).find(k => k.includes(query) || query.includes(k));
    const shops = key ? MEDICINES_DB[key].filter(s => s.available) : [];

    if (!userLat || !userLng) {
        document.getElementById('nearest-grid').innerHTML = `
            <div class="no-location-prompt" style="grid-column:1/-1">
                <div style="font-size:42px;margin-bottom:12px">📍</div>
                <h3>No Location Set</h3>
                <p>Choose a Kerala district or use GPS to see pharmacies sorted by distance.</p>
                <button class="btn-set-location-prompt" onclick="openLocationPicker()">📍 Choose District</button>
            </div>`;
        return;
    }

    const withDist = shops.map(s => ({
        ...s,
        distance: haversine(userLat, userLng, s.lat, s.lng)
    })).sort((a, b) => a.distance - b.distance);

    const lowestPrice = Math.min(...withDist.map(s => s.price));

    document.getElementById('nearest-grid').innerHTML = withDist.map((shop, i) =>
        nearestCard(shop, shop.price === lowestPrice, i)
    ).join('');
}

function nearestCard(shop, isLowest, idx) {
    const dist = shop.distance.toFixed(1);
    return `
    <div class="card" style="animation-delay:${idx * .07}s">
      <div class="shop-name" style="padding-right:0">${escapeHTML(shop.name)}</div>
      ${shop.town ? `<div class="shop-town">📌 ${escapeHTML(shop.town)}</div>` : ''}
      <div class="shop-meta">
        <div class="meta-chip">🏛️ <span>${escapeHTML(shop.city)}</span></div>
        <div class="distance-tag">📍 ${dist} km away</div>
      </div>
      <div class="card-footer">
        <div>
          <div class="price-tag ${isLowest ? 'green' : ''}">₹${shop.price} <span class="price-unit">/ strip</span></div>
          ${isLowest ? '<div style="font-size:11px;color:var(--clr-green);margin-top:2px;font-weight:600;">✅ Lowest price nearby</div>' : ''}
        </div>
        <a class="btn-direction" href="https://www.google.com/maps/dir/?api=1&destination=${shop.lat},${shop.lng}" target="_blank" rel="noopener">🗺️ Get Direction</a>
      </div>
    </div>`;
}

function noResultsHTML() {
    return `<div class="no-results" style="grid-column:1/-1">
        <div class="icon">🔍</div>
        <h3>No results found</h3>
        <p>Try searching for a common medicine like Paracetamol or Ibuprofen.</p>
    </div>`;
}

/* ─── Security helper ─────────────────────────────────────────── */
function escapeHTML(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/* ─── Close modal on Escape ───────────────────────────────────── */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') _dismissModal();
});

/* ─── Keyboard search trigger ─────────────────────────────────── */
document.getElementById('medicine-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
});
