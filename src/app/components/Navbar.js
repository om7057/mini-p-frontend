const Navbar = () => {
    return (
      <section class="w-full px-8 text-[#1E2D3D] bg-[#FFFFFF]">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div class="relative flex flex-col md:flex-row">
            <a href="#_" class="flex items-center mb-5 font-medium text-[#1E2D3D] lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span class="mx-auto text-xl font-black leading-none text-[#1E2D3D] select-none">OCD<span class="text-[#3ABEFF]">.</span></span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-[#F2F4F7]">
              <a href="#_" class="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77]">Home</a>
              <a href="#_" class="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77]">About</a>
              <a href="#_" class="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77]">FaQs</a>
              <a href="#_" class="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77]">Resources</a>
            </nav>
          </div>
  
          <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a href="#" class="text-base font-medium leading-6 text-[#1E2D3D] whitespace-no-wrap transition duration-150 ease-in-out hover:text-[#006D77]">
              Log in
            </a>
            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#FF7D3D] border border-transparent rounded-md shadow-sm hover:bg-[#006D77] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7D3D]">
              Sign up
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Navbar;
  