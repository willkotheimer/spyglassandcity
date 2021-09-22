import React from 'react';

export default function Coffee({
  coffeeItems,
}) {
  return (
        <>
        <div class="container">
           <div class="row">
                <div class="col-sm">
                Drink Name
           </div>
           <div class="col-sm">
                  Drink Description
           </div>
           <div class="col-sm">
                  Drink Sizes
           </div>
        </div>
        </div>
        {coffeeItems.map((item) => <>
           <div class="row">
                <div class="col-sm">
                 { item.title }
           </div>
           <div class="col-sm">
                  { item.description }
           </div>
           <div class="col-sm">
                  { item.lgPrice }
           </div>
        </div></>) }
        </>
  );
}
