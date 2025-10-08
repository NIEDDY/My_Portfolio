# andasy.hcl app configuration file generated for eddy on Wednesday, 08-Oct-25 21:03:19 IST
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "eddy"

app {

  env = {}

  port = 8080

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "eddy"
  }

}
