import Card from "./Card";

const Contain = () => {
  return (
    <div className="flex flex-wrap justify-between gap-3 max-w-7xl mx-auto px-4 py-10">
      <Card btnContent = "SHOP WOMEN'S RUNING" head="Always by your stride." text="From hidden pockets to four-way stretch, these new running shorts move
          with you—powering both personal bests and collective wins." img="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_1_2_Lg_MediaAction_D_WomensRunning?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
      <Card btnContent = "MEN'S RUNNING" head="Run as one." text="In lightweight fabrics that feel like a second skin, all that's left to do is sync into the momentum" img="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_1_2_Lg_MediaAction_D_MensRunning?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
    </div>
  );
};

export default Contain;