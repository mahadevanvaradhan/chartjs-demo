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
      label: 'Initial', // Name the series
            data: [22, 28, 36, 45, 54, 70, 81, 82, 98, 106, 138, 149, 151, 162, 173, 181, 186, 195, 199, 210, 222, 225, 228, 232],
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#ffff', // Add custom color background (Points and Fill)
            borderWidth: 2 // Specify bar border width
        },
        {
          label: 'Follow-on', // Name the series
                data: [12, 18, 16, 35, 34, 40, 41, 52, 58, 56, 98, 99, 111, 92, 93, 94, 96, 105, 109, 111, 112, 115, 118, 122],
                fill: false,
                borderColor: '#c24d2c', // Add custom color border (Line)
                backgroundColor: '#ffff', // Add custom color background (Points and Fill)
                borderWidth: 2 // Specify bar border width
            }
  ],
};

export default data;
