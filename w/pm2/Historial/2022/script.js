// 模拟数据（默认显示的所有记录）
const lotteryData = [
    
    //    12
    /*
    { date: "2022-12-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-29", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-28", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-27", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-23", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-22", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-21", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-20", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-19", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-18", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-13", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-12", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-11", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-10", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-09", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-08", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-07", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-06", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-05", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-04", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-12-03", mediodia: "--", tarde: "--", noche: "--" },*/

    { date: "2022-12-02", mediodia: "05", tarde: "11", noche: "55" },
    { date: "2022-12-01", mediodia: "43", tarde: "55", noche: "08" },





    //    11
    { date: "2022-11-30", mediodia: "98", tarde: "69", noche: "32" },
    { date: "2022-11-29", mediodia: "57", tarde: "76", noche: "48" },
    { date: "2022-11-28", mediodia: "46", tarde: "57", noche: "12" },
    { date: "2022-11-27", mediodia: "58", tarde: "09", noche: "53" },
    { date: "2022-11-26", mediodia: "10", tarde: "97", noche: "59" },
    { date: "2022-11-25", mediodia: "91", tarde: "46", noche: "04" },
    { date: "2022-11-24", mediodia: "06", tarde: "28", noche: "60" },
    { date: "2022-11-23", mediodia: "58", tarde: "06", noche: "59" },
    { date: "2022-11-22", mediodia: "14", tarde: "74", noche: "99" },
    { date: "2022-11-21", mediodia: "90", tarde: "10", noche: "73" },
    { date: "2022-11-20", mediodia: "90", tarde: "66", noche: "66" },
    { date: "2022-11-19", mediodia: "21", tarde: "18", noche: "94" },
    { date: "2022-11-18", mediodia: "10", tarde: "72", noche: "44" },
    { date: "2022-11-17", mediodia: "86", tarde: "31", noche: "70" },
    { date: "2022-11-16", mediodia: "95", tarde: "62", noche: "30" },
    { date: "2022-11-15", mediodia: "08", tarde: "55", noche: "94" },
    { date: "2022-11-14", mediodia: "90", tarde: "89", noche: "80" },
    { date: "2022-11-13", mediodia: "77", tarde: "10", noche: "81" },
    { date: "2022-11-12", mediodia: "12", tarde: "11", noche: "37" },
    { date: "2022-11-11", mediodia: "02", tarde: "07", noche: "54" },
    { date: "2022-11-10", mediodia: "94", tarde: "06", noche: "11" },
    { date: "2022-11-09", mediodia: "73", tarde: "29", noche: "04" },
    { date: "2022-11-08", mediodia: "59", tarde: "53", noche: "71" },
    { date: "2022-11-07", mediodia: "38", tarde: "52", noche: "71" },
    { date: "2022-11-06", mediodia: "16", tarde: "92", noche: "60" },
    { date: "2022-11-05", mediodia: "19", tarde: "22", noche: "26" },
    { date: "2022-11-04", mediodia: "21", tarde: "54", noche: "44" },
    { date: "2022-11-03", mediodia: "98", tarde: "31", noche: "70" },
    { date: "2022-11-02", mediodia: "94", tarde: "43", noche: "91" },
    { date: "2022-11-01", mediodia: "33", tarde: "88", noche: "03" },










    //    10
    { date: "2022-10-31", mediodia: "20", tarde: "79", noche: "88" },
    { date: "2022-10-30", mediodia: "14", tarde: "43", noche: "29" },
    { date: "2022-10-29", mediodia: "34", tarde: "12", noche: "44" },
    { date: "2022-10-28", mediodia: "66", tarde: "64", noche: "35" },
    { date: "2022-10-27", mediodia: "70", tarde: "73", noche: "29" },
    { date: "2022-10-26", mediodia: "63", tarde: "98", noche: "05" },
    { date: "2022-10-25", mediodia: "19", tarde: "11", noche: "24" },
    { date: "2022-10-24", mediodia: "55", tarde: "85", noche: "45" },
    { date: "2022-10-23", mediodia: "10", tarde: "76", noche: "33" },
    { date: "2022-10-22", mediodia: "80", tarde: "22", noche: "65" },
    { date: "2022-10-21", mediodia: "39", tarde: "02", noche: "90" },
    { date: "2022-10-20", mediodia: "53", tarde: "86", noche: "69" },
    { date: "2022-10-19", mediodia: "34", tarde: "90", noche: "88" },
    { date: "2022-10-18", mediodia: "73", tarde: "86", noche: "82" },
    { date: "2022-10-17", mediodia: "58", tarde: "79", noche: "91" },
    { date: "2022-10-16", mediodia: "29", tarde: "06", noche: "41" },
    { date: "2022-10-15", mediodia: "54", tarde: "51", noche: "49" },
    { date: "2022-10-14", mediodia: "57", tarde: "58", noche: "14" },
    { date: "2022-10-13", mediodia: "37", tarde: "57", noche: "62" },
    { date: "2022-10-12", mediodia: "29", tarde: "05", noche: "86" },
    { date: "2022-10-11", mediodia: "85", tarde: "84", noche: "65" },
    { date: "2022-10-10", mediodia: "66", tarde: "76", noche: "83" },
    { date: "2022-10-09", mediodia: "69", tarde: "02", noche: "31" },
    { date: "2022-10-08", mediodia: "13", tarde: "55", noche: "02" },
    { date: "2022-10-07", mediodia: "58", tarde: "92", noche: "03" },
    { date: "2022-10-06", mediodia: "42", tarde: "69", noche: "58" },
    { date: "2022-10-05", mediodia: "01", tarde: "80", noche: "63" },
    { date: "2022-10-04", mediodia: "42", tarde: "17", noche: "89" },
    { date: "2022-10-03", mediodia: "72", tarde: "65", noche: "27" },
    { date: "2022-10-02", mediodia: "59", tarde: "02", noche: "15" },
    { date: "2022-10-01", mediodia: "50", tarde: "12", noche: "13" },











    //    09
    { date: "2022-09-30", mediodia: "08", tarde: "34", noche: "94" },
    { date: "2022-09-29", mediodia: "39", tarde: "49", noche: "57" },
    { date: "2022-09-28", mediodia: "90", tarde: "79", noche: "68" },
    { date: "2022-09-27", mediodia: "24", tarde: "37", noche: "14" },
    { date: "2022-09-26", mediodia: "41", tarde: "61", noche: "32" },
    { date: "2022-09-25", mediodia: "78", tarde: "22", noche: "38" },
    { date: "2022-09-24", mediodia: "48", tarde: "77", noche: "06" },
    { date: "2022-09-23", mediodia: "69", tarde: "66", noche: "46" },
    { date: "2022-09-22", mediodia: "24", tarde: "22", noche: "93" },
    { date: "2022-09-21", mediodia: "13", tarde: "14", noche: "61" },
    { date: "2022-09-20", mediodia: "09", tarde: "68", noche: "05" },
    { date: "2022-09-19", mediodia: "29", tarde: "50", noche: "05" },
    { date: "2022-09-18", mediodia: "71", tarde: "79", noche: "14" },
    { date: "2022-09-17", mediodia: "63", tarde: "21", noche: "49" },
    { date: "2022-09-16", mediodia: "69", tarde: "14", noche: "97" },
    { date: "2022-09-15", mediodia: "63", tarde: "02", noche: "09" },
    { date: "2022-09-14", mediodia: "21", tarde: "69", noche: "72" },
    { date: "2022-09-13", mediodia: "88", tarde: "79", noche: "88" },
    { date: "2022-09-12", mediodia: "38", tarde: "29", noche: "94" },
    { date: "2022-09-11", mediodia: "14", tarde: "34", noche: "31" },
    { date: "2022-09-10", mediodia: "53", tarde: "07", noche: "28" },
    { date: "2022-09-09", mediodia: "58", tarde: "34", noche: "94" },
    { date: "2022-09-08", mediodia: "71", tarde: "03", noche: "59" },
    { date: "2022-09-07", mediodia: "18", tarde: "54", noche: "95" },
    { date: "2022-09-06", mediodia: "08", tarde: "24", noche: "33" },
    { date: "2022-09-05", mediodia: "70", tarde: "48", noche: "70" },
    { date: "2022-09-04", mediodia: "71", tarde: "10", noche: "87" },
    { date: "2022-09-03", mediodia: "95", tarde: "20", noche: "39" },
    { date: "2022-09-02", mediodia: "90", tarde: "55", noche: "39" },
    { date: "2022-09-01", mediodia: "18", tarde: "34", noche: "74" },
    
    
    
    
    
    
    
    
    
    
    
    //    08
    { date: "2022-08-31", mediodia: "00", tarde: "22", noche: "59" },
    { date: "2022-08-30", mediodia: "61", tarde: "24", noche: "60" },
    { date: "2022-08-29", mediodia: "22", tarde: "05", noche: "58" },
    { date: "2022-08-28", mediodia: "18", tarde: "25", noche: "03" },
    { date: "2022-08-27", mediodia: "99", tarde: "30", noche: "09" },
    { date: "2022-08-26", mediodia: "81", tarde: "89", noche: "34" },
    { date: "2022-08-25", mediodia: "14", tarde: "28", noche: "48" },
    { date: "2022-08-24", mediodia: "19", tarde: "33", noche: "45" },
    { date: "2022-08-23", mediodia: "09", tarde: "12", noche: "28" },
    { date: "2022-08-22", mediodia: "20", tarde: "41", noche: "12" },
    { date: "2022-08-21", mediodia: "83", tarde: "87", noche: "11" },
    { date: "2022-08-20", mediodia: "91", tarde: "76", noche: "52" },
    { date: "2022-08-19", mediodia: "96", tarde: "26", noche: "76" },
    { date: "2022-08-18", mediodia: "72", tarde: "22", noche: "86" },
    { date: "2022-08-17", mediodia: "46", tarde: "10", noche: "56" },
    { date: "2022-08-16", mediodia: "88", tarde: "27", noche: "24" },
    { date: "2022-08-15", mediodia: "46", tarde: "69", noche: "56" },
    { date: "2022-08-14", mediodia: "68", tarde: "32", noche: "11" },
    { date: "2022-08-13", mediodia: "25", tarde: "08", noche: "69" },
    { date: "2022-08-12", mediodia: "64", tarde: "90", noche: "53" },
    { date: "2022-08-11", mediodia: "38", tarde: "89", noche: "45" },
    { date: "2022-08-10", mediodia: "82", tarde: "85", noche: "28" },
    { date: "2022-08-09", mediodia: "11", tarde: "18", noche: "91" },
    { date: "2022-08-08", mediodia: "75", tarde: "34", noche: "10" },
    { date: "2022-08-07", mediodia: "06", tarde: "49", noche: "70" },
    { date: "2022-08-06", mediodia: "53", tarde: "47", noche: "48" },
    { date: "2022-08-05", mediodia: "10", tarde: "85", noche: "84" },
    { date: "2022-08-04", mediodia: "82", tarde: "59", noche: "33" },
    { date: "2022-08-03", mediodia: "53", tarde: "30", noche: "53" },
    { date: "2022-08-02", mediodia: "56", tarde: "94", noche: "75" },
    { date: "2022-08-01", mediodia: "26", tarde: "10", noche: "59" },









    //    07
    { date: "2022-07-31", mediodia: "47", tarde: "09", noche: "41" },
    { date: "2022-07-30", mediodia: "49", tarde: "18", noche: "50" },
    { date: "2022-07-29", mediodia: "97", tarde: "69", noche: "56" },
    { date: "2022-07-28", mediodia: "47", tarde: "99", noche: "04" },
    { date: "2022-07-27", mediodia: "08", tarde: "25", noche: "72" },
    { date: "2022-07-26", mediodia: "77", tarde: "06", noche: "69" },
    { date: "2022-07-25", mediodia: "78", tarde: "96", noche: "15" },
    { date: "2022-07-24", mediodia: "23", tarde: "46", noche: "04" },
    { date: "2022-07-23", mediodia: "37", tarde: "08", noche: "68" },
    { date: "2022-07-22", mediodia: "79", tarde: "69", noche: "46" },
    { date: "2022-07-21", mediodia: "36", tarde: "36", noche: "59" },
    { date: "2022-07-20", mediodia: "66", tarde: "57", noche: "01" },
    { date: "2022-07-19", mediodia: "61", tarde: "36", noche: "26" },
    { date: "2022-07-18", mediodia: "38", tarde: "55", noche: "56" },
    { date: "2022-07-17", mediodia: "03", tarde: "20", noche: "39" },
    { date: "2022-07-16", mediodia: "13", tarde: "47", noche: "77" },
    { date: "2022-07-15", mediodia: "68", tarde: "30", noche: "63" },
    { date: "2022-07-14", mediodia: "03", tarde: "87", noche: "10" },
    { date: "2022-07-13", mediodia: "84", tarde: "69", noche: "51" },
    { date: "2022-07-12", mediodia: "49", tarde: "76", noche: "00" },
    { date: "2022-07-11", mediodia: "76", tarde: "61", noche: "64" },
    { date: "2022-07-10", mediodia: "69", tarde: "20", noche: "79" },
    { date: "2022-07-09", mediodia: "65", tarde: "25", noche: "10" },
    { date: "2022-07-08", mediodia: "94", tarde: "94", noche: "77" },
    { date: "2022-07-07", mediodia: "12", tarde: "02", noche: "45" },
    { date: "2022-07-06", mediodia: "93", tarde: "74", noche: "20" },
    { date: "2022-07-05", mediodia: "08", tarde: "93", noche: "55" },
    { date: "2022-07-04", mediodia: "50", tarde: "44", noche: "97" },
    { date: "2022-07-03", mediodia: "05", tarde: "22", noche: "19" },
    { date: "2022-07-02", mediodia: "19", tarde: "03", noche: "18" },
    { date: "2022-07-01", mediodia: "79", tarde: "50", noche: "18" },







    //    06
    { date: "2022-06-30", mediodia: "72", tarde: "88", noche: "85" },
    { date: "2022-06-29", mediodia: "01", tarde: "46", noche: "96" },
    { date: "2022-06-28", mediodia: "97", tarde: "89", noche: "89" },
    { date: "2022-06-27", mediodia: "44", tarde: "88", noche: "94" },
    { date: "2022-06-26", mediodia: "34", tarde: "22", noche: "09" },
    { date: "2022-06-25", mediodia: "94", tarde: "79", noche: "84" },
    { date: "2022-06-24", mediodia: "78", tarde: "14", noche: "63" },
    { date: "2022-06-23", mediodia: "98", tarde: "40", noche: "32" },
    { date: "2022-06-22", mediodia: "99", tarde: "05", noche: "21" },
    { date: "2022-06-21", mediodia: "92", tarde: "72", noche: "52" },
    { date: "2022-06-20", mediodia: "12", tarde: "00", noche: "62" },
    { date: "2022-06-19", mediodia: "87", tarde: "47", noche: "39" },
    { date: "2022-06-18", mediodia: "99", tarde: "92", noche: "17" },
    { date: "2022-06-17", mediodia: "40", tarde: "49", noche: "22" },
    { date: "2022-06-16", mediodia: "20", tarde: "08", noche: "06" },
    { date: "2022-06-15", mediodia: "38", tarde: "07", noche: "06" },
    { date: "2022-06-14", mediodia: "97", tarde: "95", noche: "31" },
    { date: "2022-06-13", mediodia: "71", tarde: "62", noche: "26" },
    { date: "2022-06-12", mediodia: "19", tarde: "23", noche: "46" },
    { date: "2022-06-11", mediodia: "34", tarde: "81", noche: "35" },
    { date: "2022-06-10", mediodia: "32", tarde: "44", noche: "84" },
    { date: "2022-06-09", mediodia: "61", tarde: "33", noche: "62" },
    { date: "2022-06-08", mediodia: "01", tarde: "55", noche: "62" },
    { date: "2022-06-07", mediodia: "18", tarde: "57", noche: "65" },
    { date: "2022-06-06", mediodia: "08", tarde: "83", noche: "59" },
    { date: "2022-06-05", mediodia: "37", tarde: "34", noche: "99" },
    { date: "2022-06-04", mediodia: "69", tarde: "77", noche: "16" },
    { date: "2022-06-03", mediodia: "50", tarde: "19", noche: "93" },
    { date: "2022-06-02", mediodia: "29", tarde: "49", noche: "29" },
    { date: "2022-06-01", mediodia: "01", tarde: "11", noche: "28" },   







    //    05
    { date: "2022-05-31", mediodia: "35", tarde: "95", noche: "34" },
    { date: "2022-05-30", mediodia: "43", tarde: "16", noche: "50" },
    { date: "2022-05-29", mediodia: "66", tarde: "34", noche: "60" },
    { date: "2022-05-28", mediodia: "67", tarde: "62", noche: "93" },
    { date: "2022-05-27", mediodia: "17", tarde: "05", noche: "73" },
    { date: "2022-05-26", mediodia: "37", tarde: "94", noche: "01" },
    { date: "2022-05-25", mediodia: "35", tarde: "16", noche: "80" },
    { date: "2022-05-24", mediodia: "88", tarde: "08", noche: "17" },
    { date: "2022-05-23", mediodia: "22", tarde: "38", noche: "37" },
    { date: "2022-05-22", mediodia: "20", tarde: "65", noche: "35" },
    { date: "2022-05-21", mediodia: "97", tarde: "30", noche: "21" },
    { date: "2022-05-20", mediodia: "14", tarde: "40", noche: "50" },
    { date: "2022-05-19", mediodia: "17", tarde: "07", noche: "26" },
    { date: "2022-05-18", mediodia: "18", tarde: "66", noche: "44" },
    { date: "2022-05-17", mediodia: "77", tarde: "99", noche: "47" },
    { date: "2022-05-16", mediodia: "89", tarde: "69", noche: "76" },
    { date: "2022-05-15", mediodia: "12", tarde: "40", noche: "77" },
    { date: "2022-05-14", mediodia: "72", tarde: "82", noche: "33" },
    { date: "2022-05-13", mediodia: "70", tarde: "59", noche: "89" },
    { date: "2022-05-12", mediodia: "78", tarde: "32", noche: "76" },
    { date: "2022-05-11", mediodia: "96", tarde: "72", noche: "86" },
    { date: "2022-05-10", mediodia: "97", tarde: "63", noche: "05" },
    { date: "2022-05-09", mediodia: "87", tarde: "94", noche: "04" },
    { date: "2022-05-08", mediodia: "51", tarde: "37", noche: "26" },
    { date: "2022-05-07", mediodia: "22", tarde: "16", noche: "46" },
    { date: "2022-05-06", mediodia: "45", tarde: "15", noche: "73" },
    { date: "2022-05-05", mediodia: "44", tarde: "24", noche: "29" },
    { date: "2022-05-04", mediodia: "41", tarde: "97", noche: "01" },
    { date: "2022-05-03", mediodia: "53", tarde: "99", noche: "58" },
    { date: "2022-05-02", mediodia: "53", tarde: "84", noche: "45" },
    { date: "2022-05-01", mediodia: "92", tarde: "46", noche: "18" },






    //    04
    { date: "2022-04-30", mediodia: "59", tarde: "98", noche: "83" },
    { date: "2022-04-29", mediodia: "90", tarde: "37", noche: "33" },
    { date: "2022-04-28", mediodia: "61", tarde: "43", noche: "96" },
    { date: "2022-04-27", mediodia: "56", tarde: "74", noche: "13" },
    { date: "2022-04-26", mediodia: "03", tarde: "96", noche: "66" },
    { date: "2022-04-25", mediodia: "46", tarde: "31", noche: "10" },
    { date: "2022-04-24", mediodia: "26", tarde: "47", noche: "56" },
    { date: "2022-04-23", mediodia: "86", tarde: "39", noche: "17" },
    { date: "2022-04-22", mediodia: "17", tarde: "20", noche: "73" },
    { date: "2022-04-21", mediodia: "64", tarde: "12", noche: "82" },
    { date: "2022-04-20", mediodia: "65", tarde: "21", noche: "55" },
    { date: "2022-04-19", mediodia: "31", tarde: "04", noche: "44" },
    { date: "2022-04-18", mediodia: "24", tarde: "29", noche: "13" },
    { date: "2022-04-17", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-04-16", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-04-15", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-04-14", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-04-13", mediodia: "52", tarde: "52", noche: "35" },
    { date: "2022-04-12", mediodia: "07", tarde: "27", noche: "04" },
    { date: "2022-04-11", mediodia: "31", tarde: "69", noche: "09" },
    { date: "2022-04-10", mediodia: "12", tarde: "21", noche: "43" },
    { date: "2022-04-09", mediodia: "39", tarde: "69", noche: "67" },
    { date: "2022-04-08", mediodia: "05", tarde: "81", noche: "19" },
    { date: "2022-04-07", mediodia: "58", tarde: "78", noche: "25" },
    { date: "2022-04-06", mediodia: "98", tarde: "52", noche: "52" },
    { date: "2022-04-05", mediodia: "10", tarde: "58", noche: "09" },
    { date: "2022-04-04", mediodia: "93", tarde: "39", noche: "37" },
    { date: "2022-04-03", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-04-02", mediodia: "94", tarde: "--", noche: "64" },
    { date: "2022-04-01", mediodia: "08", tarde: "--", noche: "76" },






    //    03
    { date: "2022-03-31", mediodia: "49", tarde: "--", noche: "13" },
    { date: "2022-03-30", mediodia: "91", tarde: "--", noche: "70" },
    { date: "2022-03-29", mediodia: "67", tarde: "--", noche: "49" },
    { date: "2022-03-28", mediodia: "22", tarde: "--", noche: "54" },
    { date: "2022-03-27", mediodia: "59", tarde: "--", noche: "01" },
    { date: "2022-03-26", mediodia: "61", tarde: "--", noche: "25" },
    { date: "2022-03-25", mediodia: "10", tarde: "--", noche: "82" },
    { date: "2022-03-24", mediodia: "53", tarde: "--", noche: "92" },
    { date: "2022-03-23", mediodia: "33", tarde: "--", noche: "21" },
    { date: "2022-03-22", mediodia: "64", tarde: "--", noche: "09" },
    { date: "2022-03-21", mediodia: "66", tarde: "--", noche: "39" },
    { date: "2022-03-20", mediodia: "91", tarde: "--", noche: "45" },
    { date: "2022-03-19", mediodia: "28", tarde: "--", noche: "75" },
    { date: "2022-03-18", mediodia: "90", tarde: "--", noche: "90" },
    { date: "2022-03-17", mediodia: "07", tarde: "--", noche: "44" },
    { date: "2022-03-16", mediodia: "00", tarde: "--", noche: "32" },
    { date: "2022-03-15", mediodia: "34", tarde: "--", noche: "51" },
    { date: "2022-03-14", mediodia: "95", tarde: "--", noche: "92" },
    { date: "2022-03-13", mediodia: "21", tarde: "--", noche: "84" },
    { date: "2022-03-12", mediodia: "13", tarde: "--", noche: "42" },
    { date: "2022-03-11", mediodia: "00", tarde: "--", noche: "81" },
    { date: "2022-03-10", mediodia: "20", tarde: "--", noche: "61" },
    { date: "2022-03-09", mediodia: "33", tarde: "--", noche: "77" },
    { date: "2022-03-08", mediodia: "04", tarde: "--", noche: "80" },
    { date: "2022-03-07", mediodia: "61", tarde: "--", noche: "98" },
    { date: "2022-03-06", mediodia: "65", tarde: "--", noche: "43" },
    { date: "2022-03-05", mediodia: "28", tarde: "--", noche: "94" },
    { date: "2022-03-04", mediodia: "77", tarde: "--", noche: "23" },
    { date: "2022-03-03", mediodia: "81", tarde: "--", noche: "72" },
    { date: "2022-03-02", mediodia: "50", tarde: "--", noche: "58" },
    { date: "2022-03-01", mediodia: "59", tarde: "--", noche: "89" },





    //    02
    { date: "2022-02-28", mediodia: "01", tarde: "--", noche: "01" },
    { date: "2022-02-27", mediodia: "60", tarde: "--", noche: "98" },
    { date: "2022-02-26", mediodia: "81", tarde: "--", noche: "53" },
    { date: "2022-02-25", mediodia: "92", tarde: "--", noche: "73" },
    { date: "2022-02-24", mediodia: "41", tarde: "--", noche: "58" },
    { date: "2022-02-23", mediodia: "76", tarde: "--", noche: "18" },
    { date: "2022-02-22", mediodia: "55", tarde: "--", noche: "89" },
    { date: "2022-02-21", mediodia: "43", tarde: "--", noche: "50" },
    { date: "2022-02-20", mediodia: "45", tarde: "--", noche: "77" },
    { date: "2022-02-19", mediodia: "69", tarde: "--", noche: "82" },
    { date: "2022-02-18", mediodia: "75", tarde: "--", noche: "78" },
    { date: "2022-02-17", mediodia: "36", tarde: "--", noche: "90" },
    { date: "2022-02-16", mediodia: "14", tarde: "--", noche: "48" },
    { date: "2022-02-15", mediodia: "87", tarde: "--", noche: "76" },
    { date: "2022-02-14", mediodia: "60", tarde: "--", noche: "76" },
    { date: "2022-02-13", mediodia: "29", tarde: "--", noche: "91" },
    { date: "2022-02-12", mediodia: "66", tarde: "--", noche: "34" },
    { date: "2022-02-11", mediodia: "95", tarde: "--", noche: "38" },
    { date: "2022-02-10", mediodia: "67", tarde: "--", noche: "53" },
    { date: "2022-02-09", mediodia: "65", tarde: "--", noche: "99" },
    { date: "2022-02-08", mediodia: "93", tarde: "--", noche: "83" },
    { date: "2022-02-07", mediodia: "21", tarde: "--", noche: "93" },
    { date: "2022-02-06", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2022-02-05", mediodia: "20", tarde: "--", noche: "62" },
    { date: "2022-02-04", mediodia: "34", tarde: "--", noche: "38" },
    { date: "2022-02-03", mediodia: "37", tarde: "--", noche: "61" },
    { date: "2022-02-02", mediodia: "27", tarde: "--", noche: "45" },
    { date: "2022-02-01", mediodia: "49", tarde: "--", noche: "03" },






    //    01
    { date: "2022-01-31", mediodia: "23", tarde: "--", noche: "17" },
    { date: "2022-01-30", mediodia: "53", tarde: "--", noche: "23" },
    { date: "2022-01-29", mediodia: "86", tarde: "--", noche: "05" },
    { date: "2022-01-28", mediodia: "95", tarde: "--", noche: "38" },
    { date: "2022-01-27", mediodia: "72", tarde: "--", noche: "14" },
    { date: "2022-01-26", mediodia: "65", tarde: "--", noche: "12" },
    { date: "2022-01-25", mediodia: "83", tarde: "--", noche: "38" },
    { date: "2022-01-24", mediodia: "59", tarde: "--", noche: "16" },
    { date: "2022-01-23", mediodia: "01", tarde: "--", noche: "88" },
    { date: "2022-01-22", mediodia: "24", tarde: "--", noche: "67" },
    { date: "2022-01-21", mediodia: "00", tarde: "--", noche: "92" },
    { date: "2022-01-20", mediodia: "90", tarde: "--", noche: "48" },
    { date: "2022-01-19", mediodia: "28", tarde: "--", noche: "15" },
    { date: "2022-01-18", mediodia: "45", tarde: "--", noche: "44" },
    { date: "2022-01-17", mediodia: "02", tarde: "--", noche: "95" },
    { date: "2022-01-16", mediodia: "43", tarde: "--", noche: "17" },
    { date: "2022-01-15", mediodia: "89", tarde: "--", noche: "44" },
    { date: "2022-01-14", mediodia: "21", tarde: "--", noche: "60" },
    { date: "2022-01-13", mediodia: "31", tarde: "--", noche: "86" },
    { date: "2022-01-12", mediodia: "11", tarde: "--", noche: "08" },
    { date: "2022-01-11", mediodia: "59", tarde: "--", noche: "91" },
    { date: "2022-01-10", mediodia: "49", tarde: "--", noche: "36" },
    { date: "2022-01-09", mediodia: "78", tarde: "--", noche: "44" },
    { date: "2022-01-08", mediodia: "53", tarde: "--", noche: "66" },
    { date: "2022-01-07", mediodia: "32", tarde: "--", noche: "15" },
    { date: "2022-01-06", mediodia: "35", tarde: "--", noche: "48" },
    { date: "2022-01-05", mediodia: "92", tarde: "--", noche: "09" },
    { date: "2022-01-04", mediodia: "44", tarde: "--", noche: "46" },
    { date: "2022-01-03", mediodia: "67", tarde: "--", noche: "40" },
    { date: "2022-01-02", mediodia: "36", tarde: "--", noche: "75" },
    { date: "2022-01-01", mediodia: "--", tarde: "--", noche: "--" }
    // 更多数据
];
