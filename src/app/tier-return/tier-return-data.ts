const data = {
  labels: [
    '2022/12/1',
    '2022/12/2',
    '2022/12/3',
    '2022/12/4',
    '2022/12/5',
    '2022/12/6',
    '2022/12/7',
    '2022/12/8',
    '2022/12/9',
    '2022/12/10',
    '2022/12/11',
    '2022/12/12',
    '2022/12/13',
    '2022/12/14',
    '2022/12/15',
    '2022/12/16',
    '2022/12/17',
    '2022/12/18',
    '2022/12/19',
    '2022/12/20',
    '2022/12/21',
    '2022/12/22',
    '2022/12/23',
    '2022/12/24',
  ],
  datasets: [
    {
      label: 'Tier 1 Return', // Name the series
            data: [22, 28, 13, 45, 14, 40, 25, 72, 80, 86, 32, 59, 101, 101, 115, 121, 106, 135, 139, 111, 112, 113, 118, 172],
            fill: true,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#47B5FF', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
        {
          label: 'Tier 2 Hurdle Return', // Name the series
                data: [12, 18, 36, 45, 54, 70, 65, -12, 80, 86, -22, 99, 101, 139, 128, 121, 126, 135, 158, 141, 112, 163, 115, 172],
                fill: true,
                borderColor: '#2196f3', // Add custom color border (Line)
                backgroundColor: '#06283D', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            },
  ],
};

export default data;
