  
[
  {
    tag: 'hugo'
  },
  {
    tag: 'javascript'
  }
]






      

[
  {
    tag: 'hugo'
    entries: [
      {
        id: '123',
        date: ccccc,
        tags: ['hugo','javascript']
      },
      {
        id: '222',
        date: ccccc,
        tags: ['hugo','web']
      }
    ]
},
{
    tag: 'javascript'
    entries: [
      {
        id: '123',
        date: ccccc,
        tags: ['hugo','javascript']
      }
    ]
}
]

let list = [];
filtered.forEach((element, index) => {
  
  
  const lfilter = element.tags.filter(tag => {
    
    return !list.includes(tag.tag)
  });

  lfilter.forEach((tagElement) => {
    list.push({tag: tagElement});
  });
  // console.log(`Current index: ${index}`);
  // console.log(lfilter);
  // console.log(element);
});

console.log(list);