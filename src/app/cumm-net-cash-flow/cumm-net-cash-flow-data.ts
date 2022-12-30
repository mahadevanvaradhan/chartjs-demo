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
      label: 'Cummulative Net Cash Flow', // Name the series
            data: [22, 28, 36, 45, 54, 60, 61, 62, 58, 86, 88, 89, 101, 102, 103, 101, 106, 115, 119, 121, 122, 125, 128, 132],
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#ffff', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
  ],
};

export default data;
