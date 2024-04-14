{
  inputs.nixpkgs.url = "nixpkgs/nixos-unstable";

  outputs = {nixpkgs, ...}: let
    forSystems = f:
      nixpkgs.lib.genAttrs [
        "x86_64-linux"
      ] (system: f nixpkgs.legacyPackages.${system});
  in {
    devShells = forSystems (
      pkgs: {
        default = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            nodejs
            git
          ];
        };
      }
    );

    formatter = forSystems (pkgs: pkgs.alejandra);
  };
}
