/* 
lotteryDatabase for carlosw-sky,*/
// 模拟数据（默认显示的所有记录）
const lotteryData = [    //12
    { date: "2023-12-31", mediodia: "28", tarde: "16", noche: "45" },
    { date: "2023-12-30", mediodia: "81", tarde: "91", noche: "55" },
    { date: "2023-12-29", mediodia: "40", tarde: "38", noche: "68" },
    
    { date: "2023-12-28", mediodia: "38", tarde: "95", noche: "34" },
    { date: "2023-12-27", mediodia: "32", tarde: "95", noche: "18" },
    { date: "2023-12-26", mediodia: "27", tarde: "02", noche: "84" },
    
    { date: "2023-12-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2023-12-24", mediodia: "72", tarde: "92", noche: "98" },
    { date: "2023-12-23", mediodia: "85", tarde: "86", noche: "98" },
    
    { date: "2023-12-22", mediodia: "79", tarde: "79", noche: "92" },
    { date: "2023-12-21", mediodia: "42", tarde: "35", noche: "04" },
    { date: "2023-12-20", mediodia: "70", tarde: "43", noche: "32" },
    
    { date: "2023-12-19", mediodia: "73", tarde: "59", noche: "36" },
    { date: "2023-12-18", mediodia: "47", tarde: "54", noche: "95" },
    { date: "2023-12-17", mediodia: "30", tarde: "84", noche: "94" },
    
    { date: "2023-12-16", mediodia: "35", tarde: "43", noche: "05" },
    { date: "2023-12-15", mediodia: "31", tarde: "22", noche: "63" },
    { date: "2023-12-14", mediodia: "86", tarde: "25", noche: "25" },
    
    { date: "2023-12-13", mediodia: "08", tarde: "49", noche: "08" },
    { date: "2023-12-12", mediodia: "45", tarde: "59", noche: "78" },
    { date: "2023-12-11", mediodia: "93", tarde: "65", noche: "40" },
    
    { date: "2023-12-10", mediodia: "69", tarde: "98", noche: "64" },
    { date: "2023-12-09", mediodia: "79", tarde: "96", noche: "72" },
    { date: "2023-12-08", mediodia: "77", tarde: "47", noche: "12" },
    
    { date: "2023-12-07", mediodia: "95", tarde: "45", noche: "66" },
    { date: "2023-12-06", mediodia: "04", tarde: "01", noche: "54" },
    { date: "2023-12-05", mediodia: "68", tarde: "48", noche: "70" },
    
    { date: "2023-12-04", mediodia: "06", tarde: "09", noche: "--" },
    { date: "2023-12-03", mediodia: "76", tarde: "36", noche: "20" },
    { date: "2023-12-02", mediodia: "80", tarde: "59", noche: "78" },
    { date: "2023-12-01", mediodia: "50", tarde: "30", noche: "75" },







    //       11
    { date: "2023-11-30", mediodia: "68", tarde: "02", noche: "31" },
    { date: "2023-11-29", mediodia: "64", tarde: "41", noche: "98" },
    { date: "2023-11-28", mediodia: "75", tarde: "52", noche: "36" },
    { date: "2023-11-27", mediodia: "60", tarde: "89", noche: "10" },
    { date: "2023-11-26", mediodia: "98", tarde: "89", noche: "15" },
    
    { date: "2023-11-25", mediodia: "21", tarde: "48", noche: "51" },
    { date: "2023-11-24", mediodia: "04", tarde: "46", noche: "69" },
    { date: "2023-11-23", mediodia: "24", tarde: "83", noche: "86" },
    { date: "2023-11-22", mediodia: "84", tarde: "78", noche: "09" },
    
    { date: "2023-11-21", mediodia: "42", tarde: "41", noche: "27" },
    { date: "2023-11-20", mediodia: "09", tarde: "08", noche: "42" },
    { date: "2023-11-19", mediodia: "60", tarde: "51", noche: "27" },
    
    { date: "2023-11-18", mediodia: "68", tarde: "64", noche: "72" },
    { date: "2023-11-17", mediodia: "35", tarde: "70", noche: "57" },
    { date: "2023-11-16", mediodia: "84", tarde: "58", noche: "03" },
    { date: "2023-11-15", mediodia: "72", tarde: "70", noche: "02" },
    
    { date: "2023-11-14", mediodia: "63", tarde: "19", noche: "53" },
    { date: "2023-11-13", mediodia: "56", tarde: "09", noche: "57" },
    { date: "2023-11-12", mediodia: "40", tarde: "49", noche: "44" },
    { date: "2023-11-11", mediodia: "37", tarde: "76", noche: "94" },
    
    { date: "2023-11-10", mediodia: "14", tarde: "38", noche: "18" },
    { date: "2023-11-09", mediodia: "18", tarde: "15", noche: "28" },
    { date: "2023-11-08", mediodia: "12", tarde: "57", noche: "98" },
    { date: "2023-11-07", mediodia: "60", tarde: "06", noche: "55" },
   
    { date: "2023-11-06", mediodia: "74", tarde: "14", noche: "56" },
    { date: "2023-11-05", mediodia: "36", tarde: "66", noche: "63" },
    { date: "2023-11-04", mediodia: "52", tarde: "13", noche: "86" },
    { date: "2023-11-03", mediodia: "88", tarde: "94", noche: "79" },
    { date: "2023-11-02", mediodia: "22", tarde: "81", noche: "81" },
    { date: "2023-11-01", mediodia: "92", tarde: "03", noche: "41" },







    //  10
    { date: "2023-10-31", mediodia: "88", tarde: "00", noche: "64" },
    { date: "2023-10-30", mediodia: "34", tarde: "39", noche: "68" },
    { date: "2023-10-29", mediodia: "88", tarde: "69", noche: "84" },
    { date: "2023-10-28", mediodia: "28", tarde: "95", noche: "04" },
    { date: "2023-10-27", mediodia: "75", tarde: "90", noche: "27" },
    { date: "2023-10-26", mediodia: "78", tarde: "52", noche: "89" },
    { date: "2023-10-25", mediodia: "05", tarde: "98", noche: "39" },
    { date: "2023-10-24", mediodia: "29", tarde: "31", noche: "71" },
    { date: "2023-10-23", mediodia: "94", tarde: "67", noche: "72" },
    { date: "2023-10-22", mediodia: "11", tarde: "08", noche: "98" },
    { date: "2023-10-21", mediodia: "62", tarde: "82", noche: "90" },
    { date: "2023-10-20", mediodia: "57", tarde: "66", noche: "81" },
    { date: "2023-10-19", mediodia: "31", tarde: "20", noche: "68" },
    { date: "2023-10-18", mediodia: "70", tarde: "63", noche: "21" },
    { date: "2023-10-17", mediodia: "85", tarde: "26", noche: "25" },
    { date: "2023-10-16", mediodia: "52", tarde: "15", noche: "00" },
    { date: "2023-10-15", mediodia: "41", tarde: "92", noche: "41" },
    { date: "2023-10-14", mediodia: "74", tarde: "02", noche: "21" },
    { date: "2023-10-13", mediodia: "07", tarde: "97", noche: "57" },
    { date: "2023-10-12", mediodia: "25", tarde: "61", noche: "20" },
    { date: "2023-10-11", mediodia: "52", tarde: "84", noche: "63" },
    { date: "2023-10-10", mediodia: "07", tarde: "62", noche: "73" },
    { date: "2023-10-09", mediodia: "35", tarde: "32", noche: "09" },
    { date: "2023-10-08", mediodia: "38", tarde: "02", noche: "51" },
    { date: "2023-10-07", mediodia: "80", tarde: "18", noche: "60" },
    { date: "2023-10-06", mediodia: "88", tarde: "11", noche: "93" },
    { date: "2023-10-05", mediodia: "20", tarde: "86", noche: "24" },
    { date: "2023-10-04", mediodia: "91", tarde: "71", noche: "06" },
    { date: "2023-10-03", mediodia: "69", tarde: "29", noche: "90" },
    { date: "2023-10-02", mediodia: "70", tarde: "39", noche: "07" },
    { date: "2023-10-01", mediodia: "49", tarde: "88", noche: "79" },







    // 9
    { date: "2023-09-30", mediodia: "34", tarde: "39", noche: "68" },
    { date: "2023-09-29", mediodia: "88", tarde: "69", noche: "84" },
    { date: "2023-09-28", mediodia: "15", tarde: "63", noche: "69" },
    { date: "2023-09-27", mediodia: "57", tarde: "23", noche: "54" },
    { date: "2023-09-26", mediodia: "40", tarde: "87", noche: "67" },
    { date: "2023-09-25", mediodia: "75", tarde: "06", noche: "04" },
    { date: "2023-09-24", mediodia: "74", tarde: "98", noche: "11" },
    { date: "2023-09-23", mediodia: "48", tarde: "09", noche: "33" },
    { date: "2023-09-22", mediodia: "46", tarde: "43", noche: "01" },
    { date: "2023-09-21", mediodia: "43", tarde: "92", noche: "83" },
    { date: "2023-09-20", mediodia: "62", tarde: "87", noche: "37" },
    { date: "2023-09-19", mediodia: "46", tarde: "35", noche: "17" },
    { date: "2023-09-18", mediodia: "24", tarde: "29", noche: "11" },
    { date: "2023-09-17", mediodia: "77", tarde: "53", noche: "19" },
    { date: "2023-09-16", mediodia: "39", tarde: "64", noche: "96" },
    { date: "2023-09-15", mediodia: "56", tarde: "82", noche: "64" },
    { date: "2023-09-14", mediodia: "62", tarde: "14", noche: "51" },
    { date: "2023-09-13", mediodia: "68", tarde: "52", noche: "82" },
    { date: "2023-09-12", mediodia: "64", tarde: "27", noche: "64" },
    { date: "2023-09-11", mediodia: "74", tarde: "00", noche: "13" },
    { date: "2023-09-10", mediodia: "26", tarde: "55", noche: "72" },
    { date: "2023-09-09", mediodia: "03", tarde: "93", noche: "08" },
    { date: "2023-09-08", mediodia: "93", tarde: "41", noche: "49" },
    { date: "2023-09-07", mediodia: "99", tarde: "39", noche: "30" },
    { date: "2023-09-06", mediodia: "44", tarde: "77", noche: "18" },
    { date: "2023-09-05", mediodia: "51", tarde: "20", noche: "64" },
    { date: "2023-09-04", mediodia: "07", tarde: "91", noche: "87" },
    { date: "2023-09-03", mediodia: "73", tarde: "72", noche: "65" },
    { date: "2023-09-02", mediodia: "60", tarde: "20", noche: "81" },
    { date: "2023-09-01", mediodia: "34", tarde: "41", noche: "95" },








    //    8
    { date: "2023-08-31", mediodia: "92", tarde: "10", noche: "32" },
    { date: "2023-08-30", mediodia: "99", tarde: "97", noche: "82" },
    { date: "2023-08-29", mediodia: "21", tarde: "70", noche: "42" },
    { date: "2023-08-28", mediodia: "32", tarde: "03", noche: "91" },
    { date: "2023-08-27", mediodia: "30", tarde: "48", noche: "67" },
    { date: "2023-08-26", mediodia: "66", tarde: "44", noche: "35" },
    { date: "2023-08-25", mediodia: "00", tarde: "78", noche: "19" },
    { date: "2023-08-24", mediodia: "01", tarde: "16", noche: "88" },
    { date: "2023-08-23", mediodia: "91", tarde: "44", noche: "37" },
    { date: "2023-08-22", mediodia: "42", tarde: "29", noche: "09" },
    { date: "2023-08-21", mediodia: "01", tarde: "71", noche: "93" },
    { date: "2023-08-20", mediodia: "71", tarde: "64", noche: "94" },
    { date: "2023-08-19", mediodia: "78", tarde: "19", noche: "61" },
    { date: "2023-08-18", mediodia: "51", tarde: "82", noche: "63" },
    { date: "2023-08-17", mediodia: "41", tarde: "03", noche: "77" },
    { date: "2023-08-16", mediodia: "24", tarde: "94", noche: "48" },
    { date: "2023-08-15", mediodia: "91", tarde: "12", noche: "11" },
    { date: "2023-08-14", mediodia: "64", tarde: "10", noche: "52" },
    { date: "2023-08-13", mediodia: "36", tarde: "34", noche: "21" },
    { date: "2023-08-12", mediodia: "05", tarde: "26", noche: "04" },
    { date: "2023-08-11", mediodia: "55", tarde: "21", noche: "97" },
    { date: "2023-08-10", mediodia: "77", tarde: "73", noche: "88" },
    { date: "2023-08-09", mediodia: "95", tarde: "21", noche: "44" },
    { date: "2023-08-08", mediodia: "47", tarde: "16", noche: "03" },
    { date: "2023-08-07", mediodia: "68", tarde: "05", noche: "82" },
    { date: "2023-08-06", mediodia: "63", tarde: "11", noche: "22" },
    { date: "2023-08-05", mediodia: "22", tarde: "16", noche: "14" },
    { date: "2023-08-04", mediodia: "76", tarde: "12", noche: "81" },
    { date: "2023-08-03", mediodia: "41", tarde: "99", noche: "27" },
    { date: "2023-08-02", mediodia: "33", tarde: "07", noche: "30" },
    { date: "2023-08-01", mediodia: "60", tarde: "73", noche: "36" },







      // 7
    { date: "2023-07-31", mediodia: "38", tarde: "24", noche: "97" },
    { date: "2023-07-30", mediodia: "13", tarde: "92", noche: "40" },
    { date: "2023-07-29", mediodia: "47", tarde: "45", noche: "06" },
    { date: "2023-07-28", mediodia: "91", tarde: "37", noche: "91" },
    { date: "2023-07-27", mediodia: "76", tarde: "20", noche: "97" },
    { date: "2023-07-26", mediodia: "49", tarde: "32", noche: "92" },
    { date: "2023-07-25", mediodia: "15", tarde: "82", noche: "29" },
    { date: "2023-07-24", mediodia: "91", tarde: "39", noche: "55" },
    { date: "2023-07-23", mediodia: "28", tarde: "36", noche: "60" },
    { date: "2023-07-22", mediodia: "52", tarde: "42", noche: "28" },
    { date: "2023-07-21", mediodia: "39", tarde: "89", noche: "30" },
    { date: "2023-07-20", mediodia: "12", tarde: "85", noche: "61" },
    { date: "2023-07-19", mediodia: "61", tarde: "25", noche: "75" },
    { date: "2023-07-18", mediodia: "15", tarde: "72", noche: "74" },
    { date: "2023-07-17", mediodia: "60", tarde: "81", noche: "22" },
    { date: "2023-07-16", mediodia: "44", tarde: "12", noche: "19" },
    { date: "2023-07-15", mediodia: "43", tarde: "01", noche: "79" },
    { date: "2023-07-14", mediodia: "06", tarde: "33", noche: "91" },
    { date: "2023-07-13", mediodia: "98", tarde: "73", noche: "24" },
    { date: "2023-07-12", mediodia: "96", tarde: "16", noche: "94" },
    { date: "2023-07-11", mediodia: "10", tarde: "56", noche: "18" },
    { date: "2023-07-10", mediodia: "48", tarde: "19", noche: "86" },
    { date: "2023-07-09", mediodia: "80", tarde: "21", noche: "83" },
    { date: "2023-07-08", mediodia: "34", tarde: "06", noche: "38" },
    { date: "2023-07-07", mediodia: "05", tarde: "55", noche: "41" },
    { date: "2023-07-06", mediodia: "35", tarde: "21", noche: "04" },
    { date: "2023-07-05", mediodia: "56", tarde: "61", noche: "92" },
    { date: "2023-07-04", mediodia: "68", tarde: "10", noche: "92" },
    { date: "2023-07-03", mediodia: "86", tarde: "78", noche: "57" },
    { date: "2023-07-02", mediodia: "53", tarde: "71", noche: "92" },
    { date: "2023-07-01", mediodia: "74", tarde: "39", noche: "07" },






    //    6
    { date: "2023-06-30", mediodia: "74", tarde: "29", noche: "31" },
    { date: "2023-06-29", mediodia: "40", tarde: "88", noche: "21" },
    { date: "2023-06-28", mediodia: "54", tarde: "39", noche: "22" },
    { date: "2023-06-27", mediodia: "00", tarde: "35", noche: "66" },
    { date: "2023-06-26", mediodia: "53", tarde: "62", noche: "30" },
    { date: "2023-06-25", mediodia: "94", tarde: "77", noche: "59" },
    { date: "2023-06-24", mediodia: "56", tarde: "09", noche: "64" },
    { date: "2023-06-23", mediodia: "41", tarde: "21", noche: "27" },
    { date: "2023-06-22", mediodia: "13", tarde: "46", noche: "79" },
    { date: "2023-06-21", mediodia: "90", tarde: "66", noche: "96" },
    { date: "2023-06-20", mediodia: "63", tarde: "00", noche: "76" },
    { date: "2023-06-19", mediodia: "28", tarde: "16", noche: "84" },
    { date: "2023-06-18", mediodia: "81", tarde: "99", noche: "85" },
    { date: "2023-06-17", mediodia: "93", tarde: "04", noche: "07" },
    { date: "2023-06-16", mediodia: "86", tarde: "68", noche: "91" },
    { date: "2023-06-15", mediodia: "94", tarde: "86", noche: "79" },
    { date: "2023-06-14", mediodia: "23", tarde: "23", noche: "56" },
    { date: "2023-06-13", mediodia: "58", tarde: "81", noche: "23" },
    { date: "2023-06-12", mediodia: "08", tarde: "84", noche: "12" },
    { date: "2023-06-11", mediodia: "70", tarde: "84", noche: "12" },
    { date: "2023-06-10", mediodia: "29", tarde: "15", noche: "84" },
    { date: "2023-06-09", mediodia: "01", tarde: "66", noche: "10" },
    { date: "2023-06-08", mediodia: "10", tarde: "16", noche: "87" },
    { date: "2023-06-07", mediodia: "80", tarde: "32", noche: "69" },
    { date: "2023-06-06", mediodia: "49", tarde: "56", noche: "83" },
    { date: "2023-06-05", mediodia: "75", tarde: "53", noche: "21" },
    { date: "2023-06-04", mediodia: "62", tarde: "14", noche: "87" },
    { date: "2023-06-03", mediodia: "96", tarde: "02", noche: "52" },
    { date: "2023-06-02", mediodia: "95", tarde: "45", noche: "18" },
    { date: "2023-06-01", mediodia: "45", tarde: "32", noche: "91" },






    //  5
    { date: "2023-05-31", mediodia: "35", tarde: "15", noche: "83" },
    { date: "2023-05-30", mediodia: "16", tarde: "35", noche: "90" },
    { date: "2023-05-29", mediodia: "27", tarde: "92", noche: "21" },
    { date: "2023-05-28", mediodia: "02", tarde: "64", noche: "22" },
    { date: "2023-05-27", mediodia: "80", tarde: "09", noche: "13" },
    { date: "2023-05-26", mediodia: "61", tarde: "98", noche: "60" },
    { date: "2023-05-25", mediodia: "61", tarde: "30", noche: "52" },
    { date: "2023-05-24", mediodia: "90", tarde: "70", noche: "75" },
    { date: "2023-05-23", mediodia: "22", tarde: "83", noche: "89" },
    { date: "2023-05-22", mediodia: "13", tarde: "95", noche: "31" },
    { date: "2023-05-21", mediodia: "55", tarde: "23", noche: "55" },
    { date: "2023-05-20", mediodia: "98", tarde: "65", noche: "80" },
    { date: "2023-05-19", mediodia: "24", tarde: "69", noche: "57" },
    { date: "2023-05-18", mediodia: "31", tarde: "51", noche: "54" },
    { date: "2023-05-17", mediodia: "78", tarde: "69", noche: "20" },
    { date: "2023-05-16", mediodia: "85", tarde: "87", noche: "79" },
    { date: "2023-05-15", mediodia: "20", tarde: "79", noche: "12" },
    { date: "2023-05-14", mediodia: "92", tarde: "64", noche: "90" },
    { date: "2023-05-13", mediodia: "56", tarde: "95", noche: "02" },
    { date: "2023-05-12", mediodia: "69", tarde: "88", noche: "26" },
    { date: "2023-05-11", mediodia: "02", tarde: "02", noche: "73" },
    { date: "2023-05-10", mediodia: "76", tarde: "17", noche: "82" },
    { date: "2023-05-09", mediodia: "52", tarde: "89", noche: "47" },
    { date: "2023-05-08", mediodia: "85", tarde: "40", noche: "69" },
    { date: "2023-05-07", mediodia: "78", tarde: "07", noche: "16" },
    { date: "2023-05-06", mediodia: "68", tarde: "06", noche: "71" },
    { date: "2023-05-05", mediodia: "66", tarde: "05", noche: "30" },
    { date: "2023-05-04", mediodia: "06", tarde: "46", noche: "02" },
    { date: "2023-05-03", mediodia: "80", tarde: "68", noche: "25" },
    { date: "2023-05-02", mediodia: "67", tarde: "83", noche: "51" },
    { date: "2023-05-01", mediodia: "65", tarde: "31", noche: "25" },







      //   4
    { date: "2023-04-30", mediodia: "65", tarde: "29", noche: "96" },
    { date: "2023-04-29", mediodia: "25", tarde: "70", noche: "61" },
    { date: "2023-04-28", mediodia: "73", tarde: "36", noche: "04" },
    { date: "2023-04-27", mediodia: "71", tarde: "87", noche: "32" },
    { date: "2023-04-26", mediodia: "86", tarde: "79", noche: "55" },
    { date: "2023-04-25", mediodia: "75", tarde: "16", noche: "11" },
    { date: "2023-04-24", mediodia: "73", tarde: "62", noche: "20" },
    { date: "2023-04-23", mediodia: "75", tarde: "73", noche: "81" },
    { date: "2023-04-22", mediodia: "82", tarde: "53", noche: "75" },
    { date: "2023-04-21", mediodia: "71", tarde: "22", noche: "86" },
    { date: "2023-04-20", mediodia: "82", tarde: "58", noche: "21" },
    { date: "2023-04-19", mediodia: "57", tarde: "62", noche: "77" },
    { date: "2023-04-18", mediodia: "61", tarde: "59", noche: "26" },
    { date: "2023-04-17", mediodia: "25", tarde: "55", noche: "68" },
    { date: "2023-04-16", mediodia: "09", tarde: "07", noche: "63" },
    { date: "2023-04-15", mediodia: "46", tarde: "15", noche: "83" },
    { date: "2023-04-14", mediodia: "50", tarde: "43", noche: "69" },
    { date: "2023-04-13", mediodia: "43", tarde: "85", noche: "01" },
    { date: "2023-04-12", mediodia: "95", tarde: "91", noche: "33" },
    { date: "2023-04-11", mediodia: "92", tarde: "91", noche: "34" },
    { date: "2023-04-10", mediodia: "15", tarde: "56", noche: "03" },
    { date: "2023-04-09", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2023-04-08", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2023-04-07", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2023-04-06", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2023-04-05", mediodia: "51", tarde: "14", noche: "74" },
    { date: "2023-04-04", mediodia: "19", tarde: "87", noche: "83" },
    { date: "2023-04-03", mediodia: "26", tarde: "49", noche: "45" },
    { date: "2023-04-02", mediodia: "28", tarde: "21", noche: "58" },
    { date: "2023-04-01", mediodia: "16", tarde: "90", noche: "12" },






    //   3
    { date: "2023-03-31", mediodia: "49", tarde: "29", noche: "94" },
    { date: "2023-03-30", mediodia: "08", tarde: "97", noche: "96" },
    { date: "2023-03-29", mediodia: "23", tarde: "93", noche: "23" },
    { date: "2023-03-28", mediodia: "93", tarde: "99", noche: "07" },
    { date: "2023-03-27", mediodia: "39", tarde: "83", noche: "22" },
    { date: "2023-03-26", mediodia: "85", tarde: "37", noche: "16" },
    { date: "2023-03-25", mediodia: "82", tarde: "51", noche: "61" },
    { date: "2023-03-24", mediodia: "34", tarde: "57", noche: "07" },
    { date: "2023-03-23", mediodia: "13", tarde: "93", noche: "43" },
    { date: "2023-03-22", mediodia: "13", tarde: "65", noche: "40" },
    { date: "2023-03-21", mediodia: "16", tarde: "82", noche: "67" },
    { date: "2023-03-20", mediodia: "32", tarde: "14", noche: "09" },
    { date: "2023-03-19", mediodia: "11", tarde: "75", noche: "00" },
    { date: "2023-03-18", mediodia: "05", tarde: "29", noche: "27" },
    { date: "2023-03-17", mediodia: "18", tarde: "24", noche: "44" },
    { date: "2023-03-16", mediodia: "04", tarde: "87", noche: "02" },
    { date: "2023-03-15", mediodia: "28", tarde: "37", noche: "31" },
    { date: "2023-03-14", mediodia: "42", tarde: "49", noche: "32" },
    { date: "2023-03-13", mediodia: "11", tarde: "12", noche: "37" },
    { date: "2023-03-12", mediodia: "08", tarde: "86", noche: "46" },
    { date: "2023-03-11", mediodia: "02", tarde: "26", noche: "04" },
    { date: "2023-03-10", mediodia: "90", tarde: "46", noche: "13" },
    { date: "2023-03-09", mediodia: "40", tarde: "41", noche: "77" },
    { date: "2023-03-08", mediodia: "64", tarde: "04", noche: "36" },
    { date: "2023-03-07", mediodia: "67", tarde: "38", noche: "87" },
    { date: "2023-03-06", mediodia: "97", tarde: "00", noche: "73" },
    { date: "2023-03-05", mediodia: "57", tarde: "02", noche: "14" },
    { date: "2023-03-04", mediodia: "39", tarde: "85", noche: "45" },
    { date: "2023-03-03", mediodia: "39", tarde: "22", noche: "97" },
    { date: "2023-03-02", mediodia: "19", tarde: "42", noche: "42" },
    { date: "2023-03-01", mediodia: "87", tarde: "78", noche: "09" },








      //  2
    { date: "2023-02-28", mediodia: "62", tarde: "50", noche: "64" },
    { date: "2023-02-27", mediodia: "46", tarde: "30", noche: "29" },
    { date: "2023-02-26", mediodia: "07", tarde: "94", noche: "67" },
    { date: "2023-02-25", mediodia: "35", tarde: "43", noche: "90" },
    { date: "2023-02-24", mediodia: "16", tarde: "73", noche: "57" },
    { date: "2023-02-23", mediodia: "97", tarde: "44", noche: "38" },
    { date: "2023-02-22", mediodia: "45", tarde: "65", noche: "38" },
    { date: "2023-02-21", mediodia: "08", tarde: "57", noche: "58" },
    { date: "2023-02-20", mediodia: "63", tarde: "56", noche: "41" },
    { date: "2023-02-19", mediodia: "46", tarde: "93", noche: "54" },
    { date: "2023-02-18", mediodia: "78", tarde: "23", noche: "68" },
    { date: "2023-02-17", mediodia: "88", tarde: "53", noche: "61" },
    { date: "2023-02-16", mediodia: "45", tarde: "95", noche: "25" },
    { date: "2023-02-15", mediodia: "15", tarde: "87", noche: "85" },
    { date: "2023-02-14", mediodia: "45", tarde: "76", noche: "50" },
    { date: "2023-02-13", mediodia: "53", tarde: "26", noche: "04" },
    { date: "2023-02-12", mediodia: "34", tarde: "60", noche: "12" },
    { date: "2023-02-11", mediodia: "26", tarde: "41", noche: "26" },
    { date: "2023-02-10", mediodia: "99", tarde: "08", noche: "05" },
    { date: "2023-02-09", mediodia: "03", tarde: "73", noche: "83" },
    { date: "2023-02-08", mediodia: "69", tarde: "97", noche: "32" },
    { date: "2023-02-07", mediodia: "45", tarde: "06", noche: "59" },
    { date: "2023-02-06", mediodia: "15", tarde: "29", noche: "33" },
    { date: "2023-02-05", mediodia: "74", tarde: "02", noche: "78" },
    { date: "2023-02-04", mediodia: "58", tarde: "48", noche: "96" },
    { date: "2023-02-03", mediodia: "21", tarde: "16", noche: "89" },
    { date: "2023-02-02", mediodia: "41", tarde: "67", noche: "05" },
    { date: "2023-02-01", mediodia: "96", tarde: "16", noche: "53" },




    
      //  1
    { date: "2023-01-31", mediodia: "82", tarde: "53", noche: "33" },
    { date: "2023-01-30", mediodia: "09", tarde: "44", noche: "04" },
    { date: "2023-01-29", mediodia: "06", tarde: "59", noche: "60" },
    { date: "2023-01-28", mediodia: "64", tarde: "03", noche: "71" },
    { date: "2023-01-27", mediodia: "29", tarde: "84", noche: "72" },
    { date: "2023-01-26", mediodia: "17", tarde: "67", noche: "93" },
    { date: "2023-01-25", mediodia: "03", tarde: "78", noche: "23" },
    { date: "2023-01-24", mediodia: "61", tarde: "67", noche: "76" },
    { date: "2023-01-23", mediodia: "48", tarde: "92", noche: "59" },
    { date: "2023-01-22", mediodia: "69", tarde: "22", noche: "78" },
    { date: "2023-01-21", mediodia: "18", tarde: "57", noche: "94" },
    { date: "2023-01-20", mediodia: "46", tarde: "14", noche: "06" },
    { date: "2023-01-19", mediodia: "86", tarde: "64", noche: "42" },
    { date: "2023-01-18", mediodia: "51", tarde: "17", noche: "92" },
    { date: "2023-01-17", mediodia: "39", tarde: "01", noche: "49" },
    { date: "2023-01-16", mediodia: "06", tarde: "83", noche: "99" },
    { date: "2023-01-15", mediodia: "60", tarde: "98", noche: "81" },
    { date: "2023-01-14", mediodia: "12", tarde: "66", noche: "68" },
    { date: "2023-01-13", mediodia: "93", tarde: "53", noche: "04" },
    { date: "2023-01-12", mediodia: "48", tarde: "61", noche: "74" },
    { date: "2023-01-11", mediodia: "19", tarde: "86", noche: "76" },
    { date: "2023-01-10", mediodia: "96", tarde: "92", noche: "82" },
    { date: "2023-01-09", mediodia: "70", tarde: "01", noche: "82" },
    { date: "2023-01-08", mediodia: "79", tarde: "36", noche: "20" },
    { date: "2023-01-07", mediodia: "47", tarde: "09", noche: "83" },
    { date: "2023-01-06", mediodia: "96", tarde: "88", noche: "18" },
    { date: "2023-01-05", mediodia: "99", tarde: "55", noche: "06" },
    { date: "2023-01-04", mediodia: "92", tarde: "46", noche: "90" },
    { date: "2023-01-03", mediodia: "56", tarde: "65", noche: "40" },
    { date: "2023-01-02", mediodia: "21", tarde: "28", noche: "51" },
    { date: "2023-01-01", mediodia: "--", tarde: "--", noche: "--" }
    // 更多数据
];
